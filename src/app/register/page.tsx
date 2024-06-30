"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.union([z.literal(""), z.string().email("Invalid email")]).optional(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Register() {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setMessage("Registration successful");
        router.push("/");
      } else {
        const result = await res.json().catch(() => null);
        setMessage(result?.message || "Registration failed");
      }
    } catch (error) {
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Username</label>
        <input {...register("username")} className="border p-2 w-full" />
        {errors.username && <p>{String(errors.username.message)}</p>}
      </div>
      <div>
        <label>Email (optional)</label> {/* Indicate email is optional */}
        <input
          {...register("email")}
          type="email"
          className="border p-2 w-full"
        />
        {errors.email && <p>{String(errors.email.message)}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          {...register("password")}
          type="password"
          className="border p-2 w-full"
        />
        {errors.password && <p>{String(errors.password.message)}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Register
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

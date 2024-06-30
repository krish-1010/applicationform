"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data: any) => {
    const res = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });
    if (res?.error) {
      setMessage("Login failed");
    } else {
      setMessage("Login successful");
      router.push("/");
      router.refresh();
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
        <label>Password</label>
        <input
          {...register("password")}
          type="password"
          className="border p-2 w-full"
        />
        {errors.password && <p>{String(errors.password.message)}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Login
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

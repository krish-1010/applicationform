import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import prisma from "../../../../app/lib/prisma";

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check for existing user by username
    const existingUserByUsername = await prisma.user.findUnique({
      where: { username },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        { message: "Username already taken" },
        { status: 400 }
      );
    }

    // Check for existing user by email
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { message: "Email already taken" },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 10);

    await prisma.user.create({
      data: {
        username,
        email: email || null,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

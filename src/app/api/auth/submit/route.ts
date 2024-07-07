import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma"; // Adjust the path to your prisma instance
import { FormDataSchema } from "../../../lib/schema"; // Adjust the path to your schema
import { auth } from "../../../../auth"; // Import auth from your auth setup

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();
    const formData = FormDataSchema.parse(data);

    // Store the form data in the database with userId
    await prisma.formData.create({
      data: {
        ...formData,
        userId: session.user.id,
        date: new Date(formData.date), // Ensure date is properly formatted
      },
    });

    return NextResponse.json(
      { message: "Form data submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

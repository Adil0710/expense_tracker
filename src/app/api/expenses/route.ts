import { NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/auth";
import prisma from "@/app/lib/prisma";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === "string") {
      return NextResponse.json(
        { success: false, message: "Invalid token" },
        { status: 401 }
      );
    }

    const expenses = await prisma.expense.findMany({
      where: { userId: decoded.id }, // Ensure only the logged-in user's data is fetched
      include: {
        category: {
          select: {
            name: true,
            limit: true,
          },
        },
      },
      orderBy: { createdAt: "desc" }, // Latest expenses first for better UX
    });

    if (!expenses.length) {
      return NextResponse.json(
        { success: false, message: "No expenses found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, expenses },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching expenses" },
      { status: 500 }
    );
  }
}

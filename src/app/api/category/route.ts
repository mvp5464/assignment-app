import { NextRequest, NextResponse } from "next/server";
import db from "@/db";

export async function POST(req: NextRequest) {
  console.log("Connected");
  const { categoryName, categoryDescription, sold, stock } = await req.json();
  console.log({ categoryName, categoryDescription, sold, stock });
  try {
    const category = await db.category.create({
      data: {
        categoryName,
        categoryDescription,
        sold,
        stock,
      },
    });
    console.log({ category });
    return NextResponse.json({ data: category }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create category." },
      { status: 404 }
    );
  }
}

export async function GET() {
  console.log("Connected");
  try {
    const category = await db.category.findMany({
      select: {
        id: true,
        categoryName: true,
        categoryDescription: true,
        sold: true,
        stock: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ category }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create category." },
      { status: 404 }
    );
  }
}

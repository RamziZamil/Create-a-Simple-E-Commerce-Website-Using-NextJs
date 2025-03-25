import { products } from "@/data/products";
import { NextResponse } from "next/server";

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(products);
}

export async function GET_ONE(request) {
  const id = request.nextUrl.searchParams.get("id");
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(product);
}

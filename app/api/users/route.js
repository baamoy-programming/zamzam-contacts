import connectMongoBD from "@/libs/mongodb";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, address, postcode, telephone, image } = await request.json();
  await connectMongoBD();
  await User.create({ title, address, postcode, telephone, image });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoBD();
  const users = await User.find();
  return NextResponse.json({ users });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoBD();
  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: "User deleted" }, { status: 200 });
}

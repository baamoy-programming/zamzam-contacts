import connectMongoBD from "@/libs/mongodb";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newAddress: address,
    newPostcode: postcode,
    newTelephone: telephone,
    newImage: image,
  } = await request.json();
  await connectMongoBD();
  await User.findByIdAndUpdate(id, {
    title,
    address,
    postcode,
    telephone,
    img,
  });
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoBD();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}

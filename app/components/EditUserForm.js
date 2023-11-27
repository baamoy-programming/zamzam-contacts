"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EditUserForm = ({ id, title, address, postcode, telephone, image }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newAddress, setNewAddress] = useState(address);
  const [newPostcode, setNewPostcode] = useState(postcode);
  const [newTelephone, setNewTelephone] = useState(telephone);
  const [newImage, setNewImage] = useState(image);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_ROOT_URL}/api/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newTitle,
            newAddress,
            newPostcode,
            newTelephone,
            newImage,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={handleSubmit}
        action=""
        className=" p-12 text-zinc-500 w-[25rem] space-y-7 shadow-lg"
      >
        <h1 className=" font-bold text-zinc-600 text-lg">
          Update existing customer
        </h1>

        {/* input group here */}
        <div className="input-group flex flex-col space-y-1 ">
          <label htmlFor="Customer" className="font-bold">
            Customer
          </label>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className=" border text-xs border-zinc-200 rounded-sm py-2 px-3 bg-transparent outline-none"
          />
        </div>

        {/* input group here */}
        <div className="input-group flex flex-col space-y-1 ">
          <label htmlFor="street" className="font-bold">
            Street
          </label>
          <input
            type="text"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            className=" border text-xs border-zinc-200 rounded-sm py-2 px-3 bg-transparent outline-none"
          />
        </div>
        {/* input group here */}
        <div className="input-group flex flex-col space-y-1 ">
          <label htmlFor="postcode" className="font-bold">
            Postcode
          </label>
          <input
            type="text"
            value={newPostcode}
            onChange={(e) => setNewPostcode(e.target.value)}
            className=" border text-xs border-zinc-200 rounded-sm py-2 px-3 bg-transparent outline-none"
          />
        </div>
        {/* input group here */}
        <div className="input-group flex flex-col space-y-1 ">
          <label htmlFor="telephone" className="font-bold">
            Telephone
          </label>
          <input
            type="text"
            value={newTelephone}
            onChange={(e) => setNewTelephone(e.target.value)}
            className=" border text-xs border-zinc-200 rounded-sm py-2 px-3 bg-transparent outline-none"
          />
        </div>

        {/* input group here */}
        <div className="input-group flex flex-col space-y-1 ">
          <label htmlFor="image" className="font-bold">
            Image
          </label>
          <input
            type="text"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
            className=" border text-xs border-zinc-200 rounded-sm py-2 px-3 bg-transparent outline-none"
          />
        </div>

        <button
          type="submit"
          className=" text-xs font-bold py-2 w-full px-4 border-none bg-blue-500 text-white rounded-sm"
        >
          Update customer
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;

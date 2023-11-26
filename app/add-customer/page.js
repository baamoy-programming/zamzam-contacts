"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [telephone, setTelephone] = useState("");
  const [image, setImage] = useState("");
  const [err, setErr] = useState("");

  console.log(image)

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !address || !postcode || !telephone) {
      setErr("This field is required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, address, postcode, telephone, image }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a customer");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={handleSubmit}
        action=""
        className=" p-12 text-zinc-500 w-[25rem] space-y-6 shadow-lg"
      >
        <h1 className=" font-bold text-zinc-600">Create a new customer</h1>

        {/* input group here */}
        <div className="input-group flex flex-col space-y-1 ">
          <label htmlFor="Customer" className=" text-xs">
            Customer
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" border text-xs border-zinc-200 rounded-sm py-2 px-3 bg-transparent outline-none"
          />
        </div>

        {/* input group here */}
        <div className="input-group flex flex-col space-y-1 ">
          <label htmlFor="street" className=" text-xs">
            Street
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className=" border text-xs border-zinc-200 rounded-sm py-2 px-3 bg-transparent outline-none"
          />
        </div>
        {/* input group here */}
        <div className="input-group flex flex-col space-y-1 ">
          <label htmlFor="postcode" className=" text-xs">
            Postcode
          </label>
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            className=" border text-xs border-zinc-200 rounded-sm py-2 px-3 bg-transparent outline-none"
          />
        </div>
        {/* input group here */}
        <div className="input-group flex flex-col space-y-1 ">
          <label htmlFor="telephone" className=" text-xs">
            Telephone
          </label>
          <input
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className=" border text-xs border-zinc-200 rounded-sm py-2 px-3 bg-transparent outline-none"
          />
        </div>

        {/* input group here */}
        <div className="input-group flex flex-col space-y-1 ">
          <label htmlFor="image" className=" text-xs">
            Image
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className=" border text-xs border-zinc-200 rounded-sm py-2 px-3 bg-transparent outline-none"
          />
        </div>

        {/* Error message */}
        <div className="h-4">
          <small className=" text-red-400 text-xs ">{err}</small>
        </div>

        <button
          type="submit"
          className=" text-xs py-2 w-full px-4 border-none bg-blue-500 text-white rounded-sm"
        >
          Create customer
        </button>
      </form>
    </div>
  );
};

export default Form;

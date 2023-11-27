import EditUserForm from "@/app/components/EditUserForm";
import React from "react";

const getUserById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ROOT_URL}/api/users/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const { id } = params;
  const { user } = await getUserById(id);
  const { title, address, postcode, telephone, image } = user;
  return (
    <div className=" h-full">
      <EditUserForm
        id={id}
        title={title}
        address={address}
        postcode={postcode}
        telephone={telephone}
        image={image}
      />
    </div>
  );
};

export default page;

import EditUserForm from "@/app/components/EditUserForm";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ROOT_URL}/api/users/${id}`,
    {
      cache: "no-store",
    }
  );
  const { user } = await res.json();
  console.log("User: ", user);
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

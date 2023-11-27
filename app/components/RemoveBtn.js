"use client";
import React from "react";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const removeUser = async () => {
    const confirmed = confirm("Are you sue?");

    if (confirmed) {
      await fetch(`http://localhost:3000/api/users?id=${id}`, {
        method: "DELETE",
      });

      router.refresh();
    }
  };

  return (
    <button className="bg-gray-100 p-1 rounded-full" onClick={removeUser}>
      <MdDeleteOutline className="text-sm text-red-500" />
    </button>
  );
};

export default RemoveBtn;

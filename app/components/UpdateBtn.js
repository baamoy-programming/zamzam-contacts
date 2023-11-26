import React from "react";
import { MdEdit, MdOutlineUpdate } from "react-icons/md";

const UpdateBtn = () => {
  return (
    <button className="bg-gray-100 p-1 rounded-full">
      <MdEdit className="text-sm text-blue-600"/>
    </button>
  );
};

export default UpdateBtn;

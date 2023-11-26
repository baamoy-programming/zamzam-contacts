import React from "react";
import {
  MdDataset,
  MdHome,
  MdInventory,
  MdInventory2,
  MdPeople,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className=" h-full flex flex-col gap-10 items-center py-5 text-2xl">
      <div className="flex flex-col items-center gap-1">
        <MdHome />
        <small className=" text-xs">Home</small>
      </div>
      <div className="flex flex-col items-center gap-1">
        <MdPeople />
        <small className=" text-xs">Customers</small>
      </div>
      <div className="flex flex-col items-center gap-1">
        <MdInventory2 />
        <small className=" text-xs">Stock</small>
      </div>
    </div>
  );
};

export default Sidebar;

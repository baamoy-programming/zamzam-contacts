import React from "react";
import { MdHome, MdInventory2, MdPeople } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="text-xs flex md:flex-col md:h-full justify-between items-center p-5 md:py-5 bg-secondary shadow-lg">
      <div className=" text-sm font-medium  flex md:flex-col gap-2 items-center md:space-y-16">
        <img src="./logo.png" alt="" className=" w-16" />

        <div className=" grid gap-14">
          <div className=" text-slate-400 text-2xl hidden md:flex flex-col items-center gap-1">
            <MdHome />
            <small className=" text-xs">Dashboard</small>
          </div>
          <div className=" text-slate-400 text-2xl hidden md:flex flex-col items-center gap-1">
            <MdPeople />
            <small className=" text-xs">Customers</small>
          </div>
          <div className=" text-slate-400 text-2xl hidden md:flex flex-col items-center gap-1">
            <MdInventory2 />
            <small className=" text-xs">Stock</small>
          </div>
        </div>
      </div>
      <div className="flex gap-6 items-center p-1 border-2  border-zinc-600 rounded-full">
        <div className=" w-10 h-10 rounded-full">
          <img
            src="https://images.unsplash.com/photo-1693859507588-e69572086bde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
            alt=""
            className="rounded-full w-10 h-10 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import React, { useState } from "react";
import {
  MdDataset,
  MdHome,
  MdInventory,
  MdInventory2,
  MdPeople,
} from "react-icons/md";

const Form = () => {
  const [showForm, setShowForm] = useState(true);
  return (
    <div
      className={`form-wrapper flex  justify-center fixed w-full z-30 transition-all duration-500 ease-in-out translate-y-[-200%] ${
        showForm && "translate-y-0"
      }`}
    >
      <form
        action=""
        className=" p-10 bg-secondary  text-zinc-400 w-[30rem] space-y-5"
      >
        <div className="input-group flex flex-col space-y-1">
          <label htmlFor="Customer" className=" text-xs">
            Customer
          </label>
          <input
            type="text"
            className=" border border-zinc-600 rounded-sm p-1 bg-transparent"
          />
        </div>
        <div className="input-group flex flex-col space-y-1">
          <label htmlFor="address" className=" text-xs">
            Address
          </label>
          <input
            type="text"
            className=" border border-zinc-600 rounded-sm p-1 bg-transparent"
          />
        </div>
        <div className="input-group flex flex-col space-y-1">
          <label htmlFor="postcode" className=" text-xs">
            Postcode
          </label>
          <input
            type="text"
            className=" border border-zinc-600 rounded-sm p-1 bg-transparent"
          />
        </div>
        <button className=" text-xs py-2 px-4 border-none bg-blue-500 text-white rounded-sm">
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;

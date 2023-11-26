"use client";
import React, { useState } from "react";
import {
  MdEmail,
  MdLocationPin,
  MdMenuOpen,
  MdMoreHoriz,
  MdPhone,
  MdPinDrop,
  MdWhatsapp,
} from "react-icons/md";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import UpdateBtn from "./UpdateBtn";

const Card = ({ user }) => {
  const [more, setMore] = useState(false);

  return (
    <article className="rounded-md text-zinc-600 shadow-md">
      <div className=" text-xs space-y-2 flex flex-col justify-center items-center">
        <div className="w-full md:h-36 h-24  rounded-sm mb-2">
          <img
            src={`${user.image}`}
            alt=""
            className=" w-full h-full rounded-sm object-cover"
          />
        </div>
        <h1 className=" text-sm font-semibold">{user.title}</h1>
        <a
          href={`https://www.google.com/maps?q=${user.address}`}
          className="flex items-center gap-1"
        >
          <MdLocationPin /> <small>{user.address}</small>
        </a>
        <small>{user.postcode}</small>
        <a
          href={`https://www.google.com/maps?q=${user.address}`}
          className="flex items-center gap-1"
        >
          <MdPhone /> <small className=" text-zinc-400">0{user.telephone}</small>
        </a>
        
        <a
          href={`https://www.google.com/maps?q=${user.address}`}
          className="flex items-center gap-1"
        >
          <MdWhatsapp /> <small className=" text-zinc-400">0{user.telephone}</small>
        </a>
        
        
      </div>

    

      <div className="p-2 gap-4 flex justify-center mt-2">
        <RemoveBtn />
        <UpdateBtn />
      </div>
    </article>
  );
};

export default Card;

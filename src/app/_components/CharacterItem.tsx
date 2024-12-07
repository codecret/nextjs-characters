import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Character } from "~/server/api/routers/character";

interface CharacterItemProps {
  item: Character;
}
const CharacterItem = ({ item }: CharacterItemProps) => {
  return (
    <div className="bg-grey-500 relative flex h-[400px] flex-col rounded-lg bg-gray-600 sm:mx-28 sm:w-[100%] md:mx-0 md:w-[20%]">
      <div className="relative h-[40%] w-full">
        <Image className="rounded-t-lg" src={item.image} alt="" fill />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
          {item.name}
        </h5>
        <span className="text-gray-400">
          <span
            className={`mr-2 inline-block h-2 w-2 rounded-full ${item.status === "Alive" ? "bg-green-500" : item.status === "Dead" ? "bg-red-500" : "bg-gray-500"}`}
          ></span>
          {item.status} - {item.species}
        </span>
        <p className="text-white"> {item.gender}</p>
        <p className="mb-3 font-normal text-gray-200">
          Last Location:
          <span className="text-gray-400"> {item.location.name}</span>
        </p>
        <Link
          href={item.url}
          className="inline-flex items-center rounded-lg bg-yellow-300 px-3 py-2 text-center text-sm font-medium text-black hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default CharacterItem;

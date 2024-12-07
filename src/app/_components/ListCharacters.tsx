"use client";

import { useState } from "react";

import { api } from "~/trpc/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/app/_components/select";
import { SkeletonGrid } from "./SkeletonGrid";
import type { Character } from "~/server/api/routers/character";
import CharacterItem from "./CharacterItem";

export function ListCharacters() {
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const { data: characters } = api.character.fetchCharacters.useQuery({
    status: status === "all" ? "" : status,
    gender: gender === "all" ? "" : gender,
  });
  console.log(characters);

  return (
    <div className="mx-16 w-full">
      <div className="mb-10 flex justify-center gap-2">
        <Select
          onValueChange={(value) => {
            setGender(value);
          }}
        >
          <SelectTrigger className="w-[180px] bg-gray-700">
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Gender</SelectLabel>
              <SelectItem value="all">Both</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => {
            setStatus(value);
          }}
        >
          <SelectTrigger className="w-[180px] bg-gray-700">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="alive">Alive</SelectItem>
              <SelectItem value="dead">Dead</SelectItem>
              <SelectItem value="unknown">Unknown</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        {characters ? (
          <div className="flex flex-wrap justify-center gap-6">
            {characters?.map((ele: Character, index: number) => {
              return <CharacterItem item={ele} key={index} />;
            })}
          </div>
        ) : (
          <SkeletonGrid />
        )}
      </div>
    </div>
  );
}

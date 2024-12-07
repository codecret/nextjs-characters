import axios from "axios";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
  episode: string[];
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  url: string;
}
interface ApiResponse {
  results: Character[];
}
export const characterRouter = createTRPCRouter({
  fetchCharacters: publicProcedure
    .input(
      z.object({
        status: z.string().optional(),
        gender: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      const url = "https://rickandmortyapi.com/api/character";
      const response = await axios.get<ApiResponse>(url, { params: input });
      return response.data.results;
    }),
});

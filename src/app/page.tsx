import { ListCharacters } from "~/app/_components/ListCharacters";
import { HydrateClient } from "~/trpc/server";
import Footer from "./_components/Footer";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#1f1f1f] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            The <span className="text-yellow-300">Rick and Morty</span> Listing
          </h1>
          <ListCharacters />
        </div>
      </main>
      <Footer />
    </HydrateClient>
  );
}

import { prisma } from "@/shared/lib/db";
import {GamesList} from "@/features/games-list/server";

export default async function Home() {
  const games = await prisma.game.findMany();
  console.log("hello" + games);
  return (
    <div className="flex flex-col gap-8 container mx-auto pt-[100px]">
      <h1 className="text-4xl font-bold">Games</h1>
      <GamesList />
    </div>
  );
}

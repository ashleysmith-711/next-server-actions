import Image from "next/image";
import DogForm from "./components/DogForm";
import { prisma } from "./api/prisma";
import DogProfile from "./components/DogProfile";

export default async function Home() {
  const pets = await prisma.pet.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Awesome Forms with Next 13+</h1>
      <DogForm />
      {pets.map(pet => <DogProfile {...pet} />)}
    </main>
  );
}

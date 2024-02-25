import DogForm from "./components/DogForm";
import { prisma } from "./api/prisma";
import DogProfile from "./components/DogProfile";

export default async function Home() {
  const pets = await prisma.pet.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>Next JS Forms and Server Actions Example</h1>

      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2">
            <div className="p-4">
              {pets.map(pet => <DogProfile {...pet} />)}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <div className="bg-gray-100 p-4">
              <DogForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

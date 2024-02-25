import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const pet = await prisma.pet.create({
    data: {
        name: 'Lola',
        age: 2,
        sex: 'male',
        breed: 'labradoodle',
        description: 'Adorable goofball, good with kids and other dogs, looking a cat free home.',
        image: 'https://images.dog.ceo/breeds/labradoodle/lola.jpg'
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
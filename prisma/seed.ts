import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const aang = await prisma.characters.upsert({
    where: { id: 'a4c505ce-2e19-46fc-9447-f2d9f4f1401d' },
    update: {},
    create: {
      id: 'a4c505ce-2e19-46fc-9447-f2d9f4f1401d',
      name: 'Aang',
      element: 'Air',
      description: 'The last Airbender and Avatar.',
    },
  });

  const appa = await prisma.characters.upsert({
    where: { id: '41aa31bf-8421-4ad8-9d6d-7955925938ff' },
    update: {},
    create: {
      id: '41aa31bf-8421-4ad8-9d6d-7955925938ff',
      name: 'Appa',
      element: 'Air',
      description: 'Anng\'s pet guide.',
    },
  });

  console.log({ aang, appa });
}

// execute the main function
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
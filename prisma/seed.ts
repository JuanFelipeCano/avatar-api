import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const enemyType = await prisma.character_types.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      description: 'Enemy',
    },
  });

  const allyType = await prisma.character_types.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      description: 'Ally',
    },
  });

  const bendingType = await prisma.skill_types.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      description: 'Bending',
    },
  });

  const otherType = await prisma.skill_types.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      description: 'Other',
    },
  });

  const airBending = await prisma.skills.upsert({
    where: { id: 'b17e42f9-fd9e-44c7-b827-1f8ba240092f' },
    update: {},
    create: {
      id: 'b17e42f9-fd9e-44c7-b827-1f8ba240092f',
      name: 'Air Bending',
      description: 'Bending the air.',
      type_id: 1,
    },
  });

  const fireBending = await prisma.skills.upsert({
    where: { id: 'ba1654f6-033c-4873-aa29-40c0b58f81c6' },
    update: {},
    create: {
      id: 'ba1654f6-033c-4873-aa29-40c0b58f81c6',
      name: 'Fire Bending',
      description: 'Bending the fire.',
      type_id: 1,
    },
  });

  const waterBending = await prisma.skills.upsert({
    where: { id: '101bc91d-34b4-4e68-89b8-27f00603e276' },
    update: {},
    create: {
      id: '101bc91d-34b4-4e68-89b8-27f00603e276',
      name: 'Water Bending',
      description: 'Bending the water.',
      type_id: 1,
    },
  });

  const earthBending = await prisma.skills.upsert({
    where: { id: '4844f47b-c8ec-4b6d-82ef-d4c86379eeea' },
    update: {},
    create: {
      id: '4844f47b-c8ec-4b6d-82ef-d4c86379eeea',
      name: 'Earth Bending',
      description: 'Bending the earth.',
      type_id: 1,
    },
  });

  const metalBending = await prisma.skills.upsert({
    where: { id: 'c4f1f8c0-f5b8-4d5f-b1c8-d1b2f4a0f0c2' },
    update: {},
    create: {
      id: 'c4f1f8c0-f5b8-4d5f-b1c8-d1b2f4a0f0c2',
      name: 'Metal Bending',
      description: 'Bending the metal.',
      type_id: 1,
      skill_id: '4844f47b-c8ec-4b6d-82ef-d4c86379eeea',
    },
  });


  const aang = await prisma.characters.upsert({
    where: { id: 'a4c505ce-2e19-46fc-9447-f2d9f4f1401d' },
    update: {},
    create: {
      id: 'a4c505ce-2e19-46fc-9447-f2d9f4f1401d',
      name: 'Aang',
      description: 'The last Airbender and Avatar.',
      source_url: 'https://avatar.fandom.com/wiki/Aang',
      image_url: 'https://media.revistagq.com/photos/5f08145242f91a64e56904be/16:9/w_1920,c_limit/avatar_aang.jpg',
    },
  });

  const katara = await prisma.characters.upsert({
    where: { id: '6b22bc26-4732-4a65-8640-48306df2b75d' },
    update: {},
    create: {
      id: '6b22bc26-4732-4a65-8640-48306df2b75d',
      name: 'Katara',
      description: 'A waterbender from the Southern Water Tribe.',
      source_url: 'https://avatar.fandom.com/wiki/Katara',
      image_url: 'https://m.media-amazon.com/images/I/61Agca3bOgL._AC_UF894,1000_QL80_.jpg',
    },
  });

  const zuko = await prisma.characters.upsert({
    where: { id: '2c413457-465f-4135-a288-120582ae62e9' },
    update: {},
    create: {
      id: '2c413457-465f-4135-a288-120582ae62e9',
      name: 'Zuko',
      description: 'The exiled prince of the Fire Nation.',
      source_url: 'https://avatar.fandom.com/wiki/Zuko',
      image_url: 'https://sm.ign.com/t/ign_latam/screenshot/default/zuko_352t.1280.jpg',
    },
  });

  const aangSkills = await prisma.character_skills.upsert({
    where: { id: 1 },
    update: {},
    create: {
      character_id: 'a4c505ce-2e19-46fc-9447-f2d9f4f1401d',
      skill_id: 'b17e42f9-fd9e-44c7-b827-1f8ba240092f',
    },
  });

  const kataraSkills = await prisma.character_skills.upsert({
    where: { id: 2 },
    update: {},
    create: {
      character_id: '6b22bc26-4732-4a65-8640-48306df2b75d',
      skill_id: '101bc91d-34b4-4e68-89b8-27f00603e276',
    },
  });

  const zukoSkills = await prisma.character_skills.upsert({
    where: { id: 3 },
    update: {},
    create: {
      character_id: '2c413457-465f-4135-a288-120582ae62e9',
      skill_id: 'ba1654f6-033c-4873-aa29-40c0b58f81c6',
    },
  });

  const anngRelations = await prisma.character_relations.upsert({
    where: { id: 1 },
    update: {},
    create: {
      character_id: 'a4c505ce-2e19-46fc-9447-f2d9f4f1401d',
      relation_id: '6b22bc26-4732-4a65-8640-48306df2b75d',
      relation_type_id: 2,
    },
  });

  console.log({
    enemyType,
    allyType,
    bendingType,
    otherType,
    airBending,
    fireBending,
    waterBending,
    earthBending,
    metalBending,
    aang,
    katara,
    zuko,
    aangSkills,
    kataraSkills,
    zukoSkills,
    anngRelations,
  });
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
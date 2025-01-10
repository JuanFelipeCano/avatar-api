import { Injectable } from '@nestjs/common';
import { Character } from './entities/character.entity';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CharactersService {

  constructor(private readonly prisma: PrismaService) {}

  private readonly characters: Character[] = [
    { id: 1, name: 'Aang', element: 'Air', description: 'The last Airbender and Avatar.' },
    { id: 2, name: 'Katara', element: 'Water', description: 'A waterbender from the Southern Water Tribe.' },
    { id: 3, name: 'Zuko', element: 'Fire', description: 'The exiled prince of the Fire Nation.' },
  ];

  public async findAll() {
    return await this.prisma.characters.findMany();
  }

  public async findOne(id: string) {
    return await this.prisma.characters.findUnique({
      where: { id },
    });
  }
}

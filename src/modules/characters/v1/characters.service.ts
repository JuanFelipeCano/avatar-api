import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../modules/prisma/prisma.service';
import { CharacterMapper } from './mappers';

@Injectable()
export class CharactersService {

  private readonly _include = {
    character_skills: {
      include: {
        skill: true,
      },
    },
    character_relateds: {
      include: {
        related: true,
      },
    },
    relateds_character: {
      include: {
        character: true,
      },
    },
  };

  constructor(private readonly prisma: PrismaService) {}

  public async findAll(host: string) {
    const characters = await this.prisma.characters.findMany({
      include: this._include,
    });

    const charactersMapped = characters.map((character) => {
      return {
        ...character,
        relations: [...character.character_relateds, ...character.relateds_character],
      }
    });

    return {
      data: CharacterMapper.mapList(charactersMapped, host),
    };
  }

  public async findOne(id: string, host: string) {
    const character = await this.prisma.characters.findUnique({
      where: { id },
      include: this._include,
    });

    const mappedCharacter = {
      ...character,
      relations: [...character.character_relateds, ...character.relateds_character],
    };

    return {
      data: CharacterMapper.map(mappedCharacter, host),
    }
  }
}

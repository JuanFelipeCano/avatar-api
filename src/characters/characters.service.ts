import { Injectable } from '@nestjs/common';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {

  private readonly characters: Character[] = [
    { id: 1, name: 'Aang', element: 'Air', description: 'The last Airbender and Avatar.' },
    { id: 2, name: 'Katara', element: 'Water', description: 'A waterbender from the Southern Water Tribe.' },
    { id: 3, name: 'Zuko', element: 'Fire', description: 'The exiled prince of the Fire Nation.' },
  ];

  findAll() {
    return this.characters;
  }

  findOne(id: number) {
    return this.characters.find((char) => char.id === id);
  }
}

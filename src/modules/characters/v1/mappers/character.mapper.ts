import { CharacterType, SkillType } from '../../../../constants';
import { Character } from '../entities/character.entity';
import { RelationsMapper } from './relations.mapper';
import { SkillsMapper } from './skills.mapper';

const map = (character: any, host: string): Character => {
  return {
    id: character.id,
    name: character.name,
    description: character.description,
    imageUrl: character.image_url,
    sourceUrl: character.source_url,
    url: `${ host }/characters/${ character.id }`,
    skills: {
      bending: SkillsMapper.mapList(character.character_skills, SkillType.BENDING, host),
      other: SkillsMapper.mapList(character.character_skills, SkillType.OTHER, host),
    },
    allies: RelationsMapper.mapList(character.relations, CharacterType.ALLY),
    enemies: RelationsMapper.mapList(character.relations, CharacterType.ENEMY),
  };
}

const mapList = (characters: any, host: string): Character[] => {
  return characters.map((character) => map(character, host));
}

export const CharacterMapper = {
  map,
  mapList
};

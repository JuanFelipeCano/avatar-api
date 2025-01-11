import { SkillType } from '../../../constants';
import { Skill } from '../entities/character.entity';

const map = (skill: any, host: string): Skill => {
  return {
    id: skill.skill.id,
    name: skill.skill.name,
    description: skill.skill.description,
    imageUrl: skill.skill.image_url,
    url: `${ host }/skills/${ skill.skill.id }`,
  };
}

const mapList = (skills: any, type: SkillType, host: string): Skill[] => {
  return skills.filter((relation) => relation.relation_type_id === type)
    .map((relation) => map(relation, host));
};

export const SkillsMapper = {
  map,
  mapList
};

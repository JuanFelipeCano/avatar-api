export class Character {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  sourceUrl?: string;
  url: string;
  skills?: SkillTypes;
  allies?: string[];
  enemies?: string[];
}

export class SkillTypes {
  bending?: Omit<Skill, 'subSkills'>[];
  other?: Omit<Skill, 'subSkills'>[];
}

export class Skill {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  url: string;
  subSkills?: Skill[];
}

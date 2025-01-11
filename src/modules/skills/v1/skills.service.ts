import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SkillsMapper } from './mappers';

@Injectable()
export class SkillsService {

  constructor(private readonly prisma: PrismaService) {}

  public async findAll(host: string) {
    const skills = await this.prisma.skills.findMany({
      where: {
        skill_id: null,
      },
      include: {
        type: true,
        skills: true,
      },
    });

    return {
      data: SkillsMapper.mapList(skills, host),
    };
  }

  public async findOne(id: string, host: string) {
    const skill = await this.prisma.skills.findUnique({
      where: { id },
      include: {
        type: true,
        skills: true,
      },
    });

    return {
      data: SkillsMapper.map(skill, host),
    };
  }
}

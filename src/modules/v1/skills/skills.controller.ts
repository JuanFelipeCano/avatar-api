import { Controller, Get, Param } from '@nestjs/common';
import { SkillsService } from './skills.service';

@Controller({
  version: '1',
  path: 'skills',
})
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}


  @Get()
  findAll() {
    return this.skillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(+id);
  }
}

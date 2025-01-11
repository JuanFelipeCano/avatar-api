import { Controller, Get, HttpException, HttpStatus, Param, Req } from '@nestjs/common';
import { SkillsService } from './skills.service';

@Controller({
  version: '1',
  path: 'skills',
})
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  public async findAll(@Req() request: Request) {
    try {
      return await this.skillsService.findAll(request.headers['host']);
    } catch (error) {
      throw new HttpException('Error processing', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  public async findOne(@Param('id') id: string, @Req() request: Request) {
    try {
      return await this.skillsService.findOne(id, request.headers['host']);
    } catch (error) {
      throw new HttpException('Error processing', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

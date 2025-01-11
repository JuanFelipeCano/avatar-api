import { Controller, Get, HttpException, HttpStatus, Param, Query, Req } from '@nestjs/common';
import { Utils } from '../../../utils';
import { SkillsService } from './skills.service';

@Controller({
  version: '1',
  path: 'skills',
})
export class SkillsController {

  private readonly _limit = 5;

  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  public async findAll(
    @Req() request: Request,
    @Query('page') page: string,
    @Query('limit') limit: string,
  ) {
    try {
      const _page = parseInt(page, 10) || undefined;
      let _limit = parseInt(limit, 10) || undefined;

      _limit = (_page && !_limit) ? this._limit : _limit;

      return await this.skillsService.findAll(Utils.getUrlPath(request), _page, _limit);
    } catch (error) {
      throw new HttpException('Error processing', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  public async findOne(@Param('id') id: string, @Req() request: Request) {
    try {
      return await this.skillsService.findOne(id, Utils.getUrlPath(request));
    } catch (error) {
      throw new HttpException('Error processing', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

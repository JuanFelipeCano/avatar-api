import { Controller, Get, HttpException, HttpStatus, Param, Req } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller({
  version: '1',
  path: 'characters',
})
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  public async findAll(@Req() request: Request) {
    try {
      return await this.charactersService.findAll(request.headers['host']);
    } catch (error) {
      throw new HttpException('Error processing', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  public async findOne(@Req() request: Request, @Param('id') id: string) {
    try {
      return await this.charactersService.findOne(id, request.headers['host']);
    } catch (error) {
      throw new HttpException('Error processing', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

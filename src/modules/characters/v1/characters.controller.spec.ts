import { Test, TestingModule } from '@nestjs/testing';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { PrismaService } from '../../../modules/prisma/prisma.service';

describe('CharactersController', () => {
  let controller: CharactersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
      providers: [CharactersService, PrismaService],
    }).compile();

    controller = module.get<CharactersController>(CharactersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return 1 movie id: ${movieId}`;
  }

  @Post()
  create() {
    return 'this will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete movie id : ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `this will patch a movie with the id: ${movieId}`;
  }
}

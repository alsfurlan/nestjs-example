import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorEntity } from './autor.entity';
import { CreateAutorDto } from './dto/create-autor-dto';
import { UpdateAutorDto } from './dto/update-autor-dto';

@Controller('autores')
export class AutorController {
  constructor(private autorService: AutorService) {}

  @Get()
  findAll(): Promise<AutorEntity[]> {
    return this.autorService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.autorService.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autorService.remove(id);
  }

  @Post()
  create(@Body() autorDto: CreateAutorDto) {
    return this.autorService.create(autorDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() autorDto: UpdateAutorDto) {
    return this.autorService.update({
      ...autorDto,
      id,
    });
  }
}

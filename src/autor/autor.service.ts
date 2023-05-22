import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AutorEntity } from './autor.entity';
import { Repository } from 'typeorm';
import { CreateAutorDto } from './dto/create-autor-dto';
import { UpdateAutorDto } from './dto/update-autor-dto';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(AutorEntity)
    private readonly autorRepository: Repository<AutorEntity>,
  ) {}

  findAll(): Promise<AutorEntity[]> {
    return this.autorRepository.find();
  }

  async findById(id: string): Promise<AutorEntity> {
    const autor = await this.autorRepository.findOne({ where: { id } });
    if (!autor) {
      throw new NotFoundException('Autor não encontrado');
    }
    return autor;
  }

  async remove(id: string): Promise<AutorEntity> {
    const autor = await this.findById(id);
    await this.autorRepository.remove(autor);
    return autor;
  }

  async create(autorDto: CreateAutorDto): Promise<AutorEntity> {
    const entity = await this.autorRepository.create({ ...autorDto });
    return this.autorRepository.save(entity);
  }

  async update(autorDto: UpdateAutorDto): Promise<AutorEntity> {
    const autor = await this.findById(autorDto.id);
    const updated = await this.autorRepository.save({ ...autor, ...autorDto });
    return updated;
  }
}

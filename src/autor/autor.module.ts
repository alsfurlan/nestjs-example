import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AutorEntity } from './autor.entity';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AutorEntity])],
  controllers: [AutorController],
  providers: [AutorService],
})
export class AutorModule {}

import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { GeneroEnum } from '../genero.enum';

export class CreateAutorDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsDateString()
  @IsOptional()
  dataNascimento: Date;

  @IsEnum(GeneroEnum)
  @IsOptional()
  genero: GeneroEnum;
}

import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { GeneroEnum } from '../genero.enum';

export class UpdateAutorDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @IsOptional()
  nome: string;

  @IsDateString()
  @IsOptional()
  dataNascimento: Date;

  @IsEnum(GeneroEnum)
  @IsOptional()
  genero: GeneroEnum;
}

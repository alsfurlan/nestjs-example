import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAutor1684767578127 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO autores (nome) VALUES ('William Shakespeare');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM autores WHERE nome = 'William Shakespeare';
    `);
  }
}

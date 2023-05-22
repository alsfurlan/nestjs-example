import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAutor1684766703255 implements MigrationInterface {
  name = 'CreateAutor1684766703255'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "autores" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, CONSTRAINT "PK_8973029e8bb26f72a4738afc834" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "autores"`);
  }

}

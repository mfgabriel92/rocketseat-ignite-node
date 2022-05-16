import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUsersTableAddAvatarUrlColumn1652726610403
  implements MigrationInterface
{
  name = "UpdateUsersTableAddAvatarUrlColumn1652726610403";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "avatar_url" character varying`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar_url"`);
  }
}

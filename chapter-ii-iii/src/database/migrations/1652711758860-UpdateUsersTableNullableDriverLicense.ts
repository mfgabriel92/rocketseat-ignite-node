import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUsersTableNullableDriverLicense1652711758860
  implements MigrationInterface
{
  name = "UpdateUsersTableNullableDriverLicense1652711758860";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "driver_license" DROP NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "driver_license" SET NOT NULL`
    );
  }
}

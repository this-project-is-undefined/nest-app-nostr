import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingNpubUser1698970274944 implements MigrationInterface {
    name = 'AddingNpubUser1698970274944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`npub\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`npub\``);
    }

}

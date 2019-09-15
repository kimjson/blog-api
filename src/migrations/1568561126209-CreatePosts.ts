import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePosts1568561126209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `posts` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `content` varchar(65535) NOT NULL, `summary` varchar(255) NOT NULL, `category` varchar(20) NOT NULL DEFAULT '미분류', `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `posts`");
    }

}

/*
  Warnings:

  - You are about to drop the column `dislayname` on the `User` table. All the data in the column will be lost.
  - Added the required column `displayname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `dislayname`,
    ADD COLUMN `displayname` VARCHAR(191) NOT NULL;

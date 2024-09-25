/*
  Warnings:

  - You are about to drop the column `nama_admin` on the `admin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `admin` DROP COLUMN `nama_admin`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL DEFAULT '';

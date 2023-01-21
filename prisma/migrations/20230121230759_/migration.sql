/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Worry" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "suppose_minimum_events" VARCHAR(255) NOT NULL,
    "suppose_maximum_events" VARCHAR(255) NOT NULL,
    "reality_events" VARCHAR(255) NOT NULL,
    "damage_rate" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Worry_pkey" PRIMARY KEY ("id")
);

/*
  Warnings:

  - You are about to drop the column `score` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `worry_id` on the `event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "event" DROP COLUMN "score",
DROP COLUMN "worry_id";

-- CreateTable
CREATE TABLE "whish" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "whish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "score" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "score_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "worry_event_score" (
    "worry_id" INTEGER NOT NULL,
    "score_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "worry_event_score_pkey" PRIMARY KEY ("worry_id","score_id")
);

-- CreateTable
CREATE TABLE "whish_event_score" (
    "whish_id" INTEGER NOT NULL,
    "score_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "whish_event_score_pkey" PRIMARY KEY ("whish_id","score_id")
);

-- AddForeignKey
ALTER TABLE "worry_event_score" ADD CONSTRAINT "worry_event_score_worry_id_fkey" FOREIGN KEY ("worry_id") REFERENCES "worry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "worry_event_score" ADD CONSTRAINT "worry_event_score_score_id_fkey" FOREIGN KEY ("score_id") REFERENCES "score"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "whish_event_score" ADD CONSTRAINT "whish_event_score_whish_id_fkey" FOREIGN KEY ("whish_id") REFERENCES "whish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "whish_event_score" ADD CONSTRAINT "whish_event_score_score_id_fkey" FOREIGN KEY ("score_id") REFERENCES "score"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

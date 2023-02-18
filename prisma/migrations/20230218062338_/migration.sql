/*
  Warnings:

  - You are about to drop the `Worry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Worry";

-- CreateTable
CREATE TABLE "worry" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "worry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "score" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,
    "worry_id" INTEGER NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "event_worry_id_key" ON "event"("worry_id");

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_worry_id_fkey" FOREIGN KEY ("worry_id") REFERENCES "worry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

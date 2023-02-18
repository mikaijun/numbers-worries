-- DropForeignKey
ALTER TABLE "event" DROP CONSTRAINT "event_worry_id_fkey";

-- DropIndex
DROP INDEX "event_worry_id_key";

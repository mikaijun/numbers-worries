-- CreateTable
CREATE TABLE "project_has_event" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "event_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_has_event_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "project_has_event" ADD CONSTRAINT "project_has_event_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_has_event" ADD CONSTRAINT "project_has_event_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

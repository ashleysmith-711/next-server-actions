/*
  Warnings:

  - You are about to drop the column `notes` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `breed` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "age" INTEGER,
    "image" TEXT
);
INSERT INTO "new_Pet" ("age", "available", "description", "id", "image", "name") SELECT "age", "available", "description", "id", "image", "name" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

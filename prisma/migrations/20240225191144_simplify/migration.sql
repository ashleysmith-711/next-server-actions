/*
  Warnings:

  - You are about to drop the column `available` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `sex` on the `Pet` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "adopted" BOOLEAN NOT NULL DEFAULT false,
    "age" INTEGER NOT NULL
);
INSERT INTO "new_Pet" ("age", "breed", "description", "id", "name") SELECT "age", "breed", "description", "id", "name" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

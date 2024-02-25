/*
  Warnings:

  - Made the column `age` on table `Pet` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Pet` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "age" INTEGER NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Pet" ("age", "available", "breed", "description", "id", "image", "name", "sex") SELECT "age", "available", "breed", "description", "id", "image", "name", "sex" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

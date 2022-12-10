-- CreateTable
CREATE TABLE "Modules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameModule" TEXT NOT NULL,
    "boxWidth" INTEGER NOT NULL,
    "boxHeight" INTEGER NOT NULL,
    "boxDepth" INTEGER NOT NULL,
    "moduleType" TEXT NOT NULL,
    "frontType" TEXT NOT NULL,
    "knobType" TEXT NOT NULL,
    "hingsType" TEXT NOT NULL,
    "slideType" TEXT NOT NULL,
    "bottomType" TEXT NOT NULL,
    "boxThickness" INTEGER NOT NULL,
    "frontThickness" INTEGER NOT NULL,
    "bottomThickness" INTEGER NOT NULL
);

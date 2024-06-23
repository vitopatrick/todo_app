-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "todo" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

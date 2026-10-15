CREATE TABLE "MtoEntry" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "MtoEntry_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "MtoEntry_productId_createdAt_idx" ON "MtoEntry"("productId", "createdAt");

CREATE TABLE "MtoSystemInventory" (
    "id" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "MtoSystemInventory_pkey" PRIMARY KEY ("id")
);

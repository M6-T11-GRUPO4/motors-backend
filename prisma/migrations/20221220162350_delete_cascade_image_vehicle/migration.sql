-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_vehicleId_fkey";

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

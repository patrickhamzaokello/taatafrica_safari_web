// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  await prisma.safariPackage.createMany({
    data: [
      {
        packageName: "Gorilla Trekking Adventure",
        description: "Explore Bwindi Impenetrable Forest and witness mountain gorillas in their natural habitat.",
        location: "Bwindi Impenetrable National Park",
        durationDays: 4,
        pricePerPerson: 1500.0,
        imagePaths: JSON.stringify([
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]),
        maxGroupSize: 8,
        season: "June - September",
      },
      {
        packageName: "Murchison Falls Safari",
        description: "Experience Uganda's largest national park with thrilling game drives and a boat cruise to the falls.",
        location: "Murchison Falls National Park",
        durationDays: 3,
        pricePerPerson: 1200.0,
        imagePaths: JSON.stringify([
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]),
        maxGroupSize: 10,
        season: "December - February",
      },
      {
        packageName: "Queen Elizabeth National Park Tour",
        description: "Enjoy a classic African safari with tree-climbing lions and boat cruises on the Kazinga Channel.",
        location: "Queen Elizabeth National Park",
        durationDays: 5,
        pricePerPerson: 1800.0,
        imagePaths: JSON.stringify([
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]),
        maxGroupSize: 12,
        season: "July - October",
      },
      {
        packageName: "Kidepo Valley Wilderness Safari",
        description: "An off-the-beaten-path adventure in Uganda's most remote and scenic national park.",
        location: "Kidepo Valley National Park",
        durationDays: 6,
        pricePerPerson: 2000.0,
        imagePaths: JSON.stringify([
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]),
        maxGroupSize: 6,
        season: "March - May",
      },
      {
        packageName: "Lake Mburo Weekend Getaway",
        description: "A short but thrilling safari perfect for weekend travelers, featuring wildlife and boat rides.",
        location: "Lake Mburo National Park",
        durationDays: 2,
        pricePerPerson: 800.0,
        imagePaths: JSON.stringify([
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]),
        maxGroupSize: 14,
        season: "All year round",
      },
    ],
  });

  console.log("✅ Safari packages seeded successfully!");

  const admin = await prisma.adminUser.create({
    data: {
      username: 'admin',
      password: 'admin123', // Change this to a secure password
    },
  })

  console.log("admin  user created successfully")
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

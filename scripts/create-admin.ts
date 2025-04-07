import { prisma } from '../src/lib/prisma'

async function main() {
  const admin = await prisma.adminUser.create({
    data: {
      username: 'admin',
      password: 'admin123', // Change this to a secure password
    },
  })

  console.log('Admin user created:', admin)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 
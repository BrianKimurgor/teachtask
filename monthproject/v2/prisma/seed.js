
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create mock users
  const users = [
    { username: 'user1', displayname: 'User One' },
    { username: 'user2', displayname: 'User Two' },
    { username: 'user3', displayname: 'User Three' },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log('Mock data created');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

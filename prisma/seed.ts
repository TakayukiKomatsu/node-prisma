import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.deleteMany({});
  await prisma.post.deleteMany({});

  const user = await prisma.user.create({
    data: {
      name: "Bonieky",
      email: "suporte@b7web.com.br",
      age: 70,
    },
  });

  const posts = await prisma.post.create({
    data: {
      title: "Posts de teste criado via seed",
      body: "esse é o body",
      authorId: user.id,
    },
  });
};

main();

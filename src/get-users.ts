import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {

 const users = await prisma.user.findMany({});
 console.log(users);
 const user = await prisma.user.findUnique({

  where: {
   email: "Avinashisincontrol@gmail.com"
  }
 });
 console.log(user);

}

main()
.then(async() => {
await prisma.$disconnect()
})
.catch(async(e) => {
console.error(e)

await prisma.$disconnect()
process.exit(1)

});
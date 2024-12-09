import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query'],});

async function main(){
let res = await prisma.user.findMany({
where: {
 email: {
  endsWith: 'gmail.com',
 },
 posts: {
  some: {
   published: true,
  }
 }
},
include: {
 posts: {
  where: {
   published: true,
  }
 }
}

})

}

main()
.then(async() => {
 await prisma.$disconnect()
 })
 .catch(async(e) => {
 console.error(e)
 
 await prisma.$disconnect()
 process.exit(1)
 
 })
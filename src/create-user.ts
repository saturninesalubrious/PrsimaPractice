import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query'],})

async function main() {
//you will write your prsima client queries here

await prisma.user.create({
data: {
email: "vivaciousbcarb@gmail.com",
name: "Hermoinee grenjar"
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
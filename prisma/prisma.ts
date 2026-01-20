// import { PrismaClient } from '@prisma/client'

// const prismaClientSingleton = () => {
// 	return new PrismaClient()
// }

// declare global {
// 	var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
// }

// export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
// import { PrismaClient } from '../app/generated/prisma/client'
// import { PrismaClient } from '@prisma/client'

// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// export const prisma = globalForPrisma.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../app/generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

// const adapter = new PrismaPg({ connectionString })
const adapter = new PrismaPg({
	connectionString,
	ssl: { rejectUnauthorized: false },
})
const prisma = new PrismaClient({ adapter })

// const prisma = new PrismaClient({
// 	__internal: {
// 		useUds: true,
// 	},
// } as any)

export { prisma }

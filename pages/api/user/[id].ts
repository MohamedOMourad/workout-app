import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { id }: Partial<{ [key: string]: string | string[]; }> = req.query
    const user = await prisma.user.findUnique({ where: { id: +id! } })
    res.status(200).json({ user })
}

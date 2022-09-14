import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const user = await prisma.user.findUnique({ where: { id: 2 } })
  res.status(200).json({ user })
}

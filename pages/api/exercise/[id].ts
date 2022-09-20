import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id }: Partial<{ [key: string]: string | string[] }> = req.query!;
  const exercise = await prisma.exercise.findUnique({ where: { id: +id! } });
  res.status(200).json({ exercise });
}

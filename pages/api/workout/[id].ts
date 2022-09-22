import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { prisma } from '../../../lib/prisma';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id }: Partial<{ [key: string]: string | string[] }> = req.query!;
  const workouts = await prisma.workout.findUnique({ where: { id: +id! } });
  res.status(200).json({ workouts });
}

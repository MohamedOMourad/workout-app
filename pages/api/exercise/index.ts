import { PrismaClient } from "@prisma/client";
import { prisma } from '../../../lib/prisma';

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const exercises = await prisma.exercise.findMany();
  res.status(200).json({ exercises });
}

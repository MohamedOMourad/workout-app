import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const workouts = await prisma.workout.findMany();
  res.status(200).json({ workouts });
}

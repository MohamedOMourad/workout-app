import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    switch (req.method) {
        case "GET":
            const users = await prisma.user.findMany();
            res.status(200).json({ users });
            break;
        case "POST":
            const { firstName, lastName, email, password, gender, age, height, weight, imgUrl } = req.body
            const user = await prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    password,
                    gender,
                    age,
                    height,
                    weight,
                    imgUrl,
                }
            })
            res.status(200).json({ user });
            break;
        default:
            res.status(404).json("Not Found!");
    }
}

import { NextApiResponse } from 'next';
import { NextApiRequest } from 'next';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

// const GetUser = async (req: NextApiRequest, res: NextApiResponse) =>{

// }

async function GetUser(req: NextApiRequest, res: NextApiResponse){
    const user = await prisma.user.findMany()
    res.status(200).json(user)

}

export default GetUser
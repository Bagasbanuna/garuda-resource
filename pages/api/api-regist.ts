import { NextApiResponse } from 'next';
import { NextApiRequest } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


const ApiRegist = async (req: NextApiRequest, res: NextApiResponse) => {
if (req.method == "POST"){
    let body = JSON.parse(req.body)
    // console.log(body , 'masuk')
    // res.status(201).json(body)
    const regist = await prisma.user.create({
        data: {
            nama: body.nama,
            email: body.email,
            password: body.password
        }
    })
    res.status(201).json(body)
    console.log(body, "Success")
}

}

export default ApiRegist
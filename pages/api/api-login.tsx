import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const ApiLogin = async (req: NextApiRequest, res: NextApiResponse) => {
    if ( req.method == "POST"){

        let body = JSON.parse(req.body)
        // console.log(body)
        // res.status(201).json(body)

        const user = await prisma.user.create({
            data: {
                email: body.email,
                password:  body.password
            }
        })
        res.status(201).json(body)
        console.log(body)
    }

}

export default ApiLogin
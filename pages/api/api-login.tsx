import { NextApiRequest, NextApiResponse } from "next"


const ApiLogin = async (req: NextApiRequest, res: NextApiResponse) => {
    if ( req.method == "POST"){

        let body = req.body
        console.log(body)
        res.status(201).json(body)
       
    }

}

export default ApiLogin
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // const resr = req.query;
    // console.log(resr);
    // // res.status(200).json(resr);
    res.send("grty");    
}

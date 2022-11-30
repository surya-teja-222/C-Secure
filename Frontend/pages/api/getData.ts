import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import type { NextApiRequest, NextApiResponse } from "next";

const BACKEND_URI = process.env.BACKEND_URI;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (session && session.user) {
        const response = await fetch(`${BACKEND_URI}/validate`, {
            method: "POST",
            body: JSON.stringify({ url: req.query["url"] }),
        })
            .then((ress) => ress.json())
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err));
    } else {
        res.send({
            error: "You must be signed in to view the protected content on this page.",
        });
    }
};

import { NextApiRequest, NextApiResponse } from "next";

export default async function getStats(req: NextApiRequest, res: NextApiResponse) {
    let data = await fetch('http://hook.tunes.ninja/stats').then((res) => res.json());
    console.log(data)
    return res.status(200).json(data);
}
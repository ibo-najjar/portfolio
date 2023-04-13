import { db } from "lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "./auth/[...nextauth]";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const name = session.user?.name;
  const email = session.user?.email;

  if (req.method === "POST") {
    const result = await db.Message.create({
      data: {
        message: req.body,
        name,
        email,
        user: {
          connect: {
            email,
          },
        },
      },
    });
    return res
      .status(200)
      .send({ message: `Hello ${JSON.stringify(result)}!` });
  }

  return res.status(405).send({ error: "Method not allowed" });
};

export default handler;

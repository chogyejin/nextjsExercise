import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: req.cookies.a_name });
};

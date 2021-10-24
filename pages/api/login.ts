import type { NextApiRequest, NextApiResponse } from 'next';
type Data = {
  message: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // res.statusCode = 200;
  // res.json({ name: null });
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', 'a_name=Tom;Max-Age=3600;HttpOnly,Secure');
    res.statusCode = 200;
    res.json({ message: 'ok' });
  }
};

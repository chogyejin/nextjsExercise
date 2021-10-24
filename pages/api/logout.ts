import type { NextApiRequest, NextApiResponse } from 'next';
type Data = {
  message: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // res.statusCode = 200;
  // res.json({ name: null });
  res.setHeader('Set-Cookie', 'a_name=Tom;Max-Age=0;HttpOnly,Secure');
  res.statusCode = 200;
  res.json({ message: 'ok' });
};

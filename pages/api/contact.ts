// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phoneNumber: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data: Data = req.body;

  if (!data.firstName || !data.lastName || !data.email || !data.message) {
    return res.status(400).json({
      message: 'Missing fields',
    });
  }

  const response = await fetch(
    `https://api.airtable.com/v0/appoq3nZW5Iw0gtqK/tblWgxcuKQ4q6f7a2`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          message: data.message,
          phone_number: data.phoneNumber,
          Status: 'Nog niet beantwoord',
        },
      }),
    },
  );

  const json = await response.json();
  console.log(json);

  return res.status(200).json({
    message: 'Success',
  });
}

// import { sendEmail } from "@/services/emailTemplate";
import { sendEmail } from '@/components/form/emailTemplate';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only post request allowed' });
  }
  try {
    const { name, email, message } = req.body;
    
    const data = {
        name: name,
        email: email,
        content: message,
      }
      

    const emailParam = {
      to: process.env.NEXT_PUBLIC_EMAIL as string,
      from: process.env.NEXT_PUBLIC_ADMIN_EMAIL as string,
      name: name as string,
      message: message as string, 
      email: email as string
    };
    sendEmail(emailParam);

    return res.status(200).json({ message: "Contact Email Sent Successfully" });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Internal server error';
    res.status(500).json({ message: errorMessage });
  }
}

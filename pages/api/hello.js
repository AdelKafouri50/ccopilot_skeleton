// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../lib/db_connect";

dbConnect();

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
  
}

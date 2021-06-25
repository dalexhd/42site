// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { hash } = req.query;
  if (typeof hash !== "undefined") {
    if (req.method === 'POST') {
      if (hash === "1a91e3dace36e2be3bf030a65679fe821aa1d6ef92e7c9902eb318182c355691") {
        res.status(200).json({ redirect: '/1AE8F5E8A1DD1718ED27ABAB94879D' });
      } else {
        res.status(400).json({ error: 'Bad hash!' })
      }
    } else {
      res.status(400).json({ error: 'Bad method!' })
    }
  }
  else {
    res.status(400).json({ error: 'Por favor envía el hash!' })
  }
}

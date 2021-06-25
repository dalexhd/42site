// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	const { hash } = req.query;
	if (req.method === 'GET') {
		const seconds = new Date().getSeconds();
		if (seconds > 40 && seconds < 44) {
			res.status(200).json({ redirect: '/final_9A8B629166BADCE64D5A7E99CDCFF' });
		} else {
			res.status(429).json({ error: 'Rate limit exceed. Please retry in "42" second' });
		}
	} else {
		res.status(400).json({ error: 'Bad method!' })
	}
}

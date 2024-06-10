
async function saveSession(req, res, next) {
	try {
		console.log(JSON.stringify(req.body, Object.getOwnPropertyNames(req.body)))
		req.session.accessToken = req.body.accessToken;
		res.status(201).json({message: "Session saved"});
	} catch (error) {
		console.error(error)
		res.status(401).json({message: "Unauthorized"});
	}
}

export { saveSession };

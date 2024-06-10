function extractToken(req, res, next) {
	const uid = req.sessions.uid
	if (uid) {
		req.token = { uid: uid };
		next();
	} else {
		res.status(401).json({ message: 'Token not found' });
	}
}
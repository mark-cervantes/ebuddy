const {verifyUserToken} = require('./auth.util')
const session = require('express-session');
const {getAuth} = require('firebase-admin/auth');
const {app} = require('../../firebase');

const sessionMiddleware = session({
	secret: '133c6d9e-9194-45b6-b8a8-28eda47f13d4',
	resave: false,
	saveUninitialized: false,
	cookie: { secure: false }
});

// Middleware to apply session middleware selectively
const applySessionMiddleware = (req, res, next) => {
	console.debug(`Applying session middleware`);
	sessionMiddleware(req, res, next);
};

async function verifyToken(req, res, next) {
	console.debug(`Verifying token:`);
	console.debug(`req.body: ${JSON.stringify(req.body, Object.getOwnPropertyNames(req.body))}`);
	try {
		if (!req.body.accessToken)
			return res.status(401).contentType('application/json').send('No token provided');

		const decodedToken = await getAuth(app).verifyIdToken(req.body.accessToken)
		console.log(JSON.stringify(decodedToken))
		const uid = decodedToken.uid;
		next()
	} catch (error) {
		console.error(error)
		res.status(401).json({message: "Unauthorized"});
	}
}

module.exports = {
	verifyToken,
	applySessionMiddleware
}
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

/**
 * Applies whatever other is on the req.session to the session.
 * @param req
 * @param res
 * @param next
 */
function applySessionMiddleware(req, res, next) {
	console.debug(`Applying session middleware`);
	sessionMiddleware(req, res, () => {
		if (! req.session) {
			console.error('Session middleware not applied')
			return res.status(500).send('Session not applied')
		}
		next()
	});
}


/**
 * middleware that verifies the authenticitiy of the access token.
 * if it is verified, the middleware has a sideeffect of adding the uid to the request (res.uid)
 * else, it sends a 401 status code
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
async function verifyToken(req, res, next) {
	console.debug(`Verifying token:`);
	console.debug(`req.body: ${JSON.stringify(req.body, Object.getOwnPropertyNames(req.body))}`);
	try {
		const accessToken = req?.body?.accessToken || req?.session?.accessToken;
		if (! accessToken)
			return res.status(401).contentType('application/json').send('No token provided');

		const decodedToken = await getAuth(app).verifyIdToken(accessToken)
		console.log(JSON.stringify(decodedToken))
		const uid = decodedToken.uid;
		req.session = { uid }
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
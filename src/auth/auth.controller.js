const {
	createUserWithEmailAndPassword,
	browserSessionPersistence,
	signInWithEmailAndPassword,
	setPersistence,
	inMemoryPersistence,
	getAuth
} = require("firebase-admin/auth")
// const {app} = require('../../firebase')
const {verifyUserToken} = require('./auth.util')


async function saveSession(req, res, next) {
	try {
		console.log(JSON.stringify(req.body, Object.getOwnPropertyNames(req.body)))
		req.session.accessToken = req.body.accessToken;
		res.redirect('../public/Dashboard/dashboard.html')
	} catch (error) {
		console.error(error)
		res.status(401).json({message: "Unauthorized"});
	}
}

async function signup(req, res) {
	const auth = getAuth(app);
	const {email, password} = req.body
	createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
		const user = userCredential.user;
		res.status(200).json({user});
	}).catch(error => {
		res.status(400).json({message: error.message});
	})
}

module.exports = {
	signup,
	saveSession
}

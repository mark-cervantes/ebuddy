const {
	createUserWithEmailAndPassword,
	browserSessionPersistence,
	signInWithEmailAndPassword,
	setPersistence,
	inMemoryPersistence,
	getAuth
} = require("firebase/auth")
const {app} = require('../../firebase')

async function login(req, res) {
	const auth = getAuth(app);
	setPersistence(auth, browserSessionPersistence).then(() => {
		const {email, password} = req.body
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {

			const user = userCredential.user;
			res.status(200).json({user});

		})
		.catch((error) => {
			res.status(401).json({message: error.message});
		})
	})
	.catch((error) => {
		res.status(500).json({message: error.message});
	});
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
	login, signup
}

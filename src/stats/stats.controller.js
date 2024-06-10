const { db } = require("../../firebase.js");
const { doc, setDoc } = "firebase-admin/firestore";
async function getStatsController(req, res) {
		try {
			const userID = req.params?.userID;
			const statRef = doc(db, 'users')
			setDoc(statRef,
				{  }
			)
		} catch (error) {
				res.status(500).json({ message: error.message });
		}
}


async function setStatsController(req, res) {
	try {
		console.log(JSON.stringify(req.session))
		db.collection('users').doc(req.session.uid)
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}
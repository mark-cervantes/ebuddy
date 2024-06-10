
import { db } from '../../firebase.js';

async function getStatsController(req, res) {
	try {
		const userid = req.params?.userid;
		if (!userid) {
			return res.status(400).send('User ID is required');
		}

		const statref = db.collection('users').doc(userid);
		await statref.set({ /* your data here */ });

		res.status(200).send('Document successfully written!');
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

async function setStatsController(req, res) {
	try {
		console.log(JSON.stringify(req.session));
		if (!req.session.uid) {
			return res.status(400).send('Session UID is required');
		}

		const userRef = db.collection('users').doc(req.session.uid);
		await userRef.set({ /* your data here */ });

		res.status(200).send('Document successfully written!');
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

export { getStatsController, setStatsController };

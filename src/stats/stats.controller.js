const { db } = require("../config/firebase");
const { doc, setDoc } = "firebase/firestore";
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
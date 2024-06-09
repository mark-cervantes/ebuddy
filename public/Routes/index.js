import {
	signInWithEmailAndPassword,
	getAuth,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { app,  } from "../firebase.js";

function authenticatedRedirect(route) {
	const auth = getAuth(app);
	auth.onAuthStateChanged((user) => {
		if (user) {
			// User is signed in.
			console.log('User is signed in:', user);
			window.location.href = route
		} else {
			window.location.href = '../public/Login/login.html'
		}
	})
}

export {
	authenticatedRedirect
}
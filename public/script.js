// function authenticatedRoute(route) {
// 	const auth = firebase.auth();
// 	auth.onAuthStateChanged((user) => {
// 		if (user) {
// 			document.location.href = route
// 		} else {
// 			document.location.href = '../public/Login/login.html'
// 		}
// 	})
// }
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
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('saveSession');

registerBtn.addEventListener('click', () => {
	container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
	container.classList.remove("active");
});
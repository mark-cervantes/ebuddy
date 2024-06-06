const { getAuth } = require('firebase/auth');
const { app } = require('../../firebase')

/**
 * 
 * @read https://firebase.google.com/docs/auth/admin/verify-id-tokens#verify_id_tokens_using_the_firebase_admin_sdk
 * @param {string} firebaseIdToken - 
 * @returns {}
 */
function verifyUserToken(firebaseIdToken) {
  // idToken comes from the client app
  getAuth(app)
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      return uid
    })
    .catch((error) => {
      throw error
    });
}
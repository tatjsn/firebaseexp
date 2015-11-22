import Firebase from 'firebase';

const ref = new Firebase('https://tatdbg-001.firebaseio.com');
ref.onAuth(auth => {
  if (auth) {
    console.log('uid=', auth.uid);
  } else {
    console.log('no auth');
  }
});

function authWithPopup() {
  ref.authWithOAuthPopup('google', (error, auth) => {
    if (error) {
      console.log('Login failed', error);
    } else {
      console.log('Back from popup: uid=', auth.uid);
    }
  });
}

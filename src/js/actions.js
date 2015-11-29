import Firebase from 'firebase';
import history from './history';

const fb = new Firebase('https://tatdbg-001.firebaseio.com');

export const RECEIVE_ENTRY = 'RECEIVE_ENTRY';
export const RECEIVE_AUTH = 'RECEIVE_AUTH';

export const receiveEntry = (payload) => ({ type: RECEIVE_ENTRY, payload });
export const receiveAuth = (payload) => ({ type: RECEIVE_AUTH, payload });

export const init = () => dispatch => {
  fb.onAuth(auth => {
    console.log('init auth', auth);
    if (auth) {
      dispatch(receiveAuth(auth));
    }
  });
  fb.child('entries').orderByKey().limitToLast(3).on('child_added', snapshot => {
    dispatch(receiveEntry(snapshot.val()));
  });
}

export const login = () => dispatch =>
  fb.authWithOAuthPopup('google', (error, auth) => {
    console.log('google auth', error, auth);
    if (!error && auth) {
      dispatch(receiveAuth(auth));
    }
  });

export const post = text =>  dispatch =>
  fb.child('entries').push({ text }, () => {
    history.push('/');
  });

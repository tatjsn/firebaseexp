import Firebase from 'firebase';

const store = new Firebase('https://tatdbg-001.firebaseio.com/entries');
store.push({ text: 'Hello' }, () => {
  store.orderByKey().limitToLast(3).on('child_added', snapshot => {
    console.log('child_added', snapshot.val());
  });
  // store.once('value', snapshot => {
  //  snapshot.forEach(data => console.log(data.val()));
  // });
});

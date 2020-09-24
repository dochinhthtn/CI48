// firebase.firestore().collection('users').add();
// firebase.firestore().collection('users').update();
// firebase.firestore().collection('users').delete();
// firebase.firestore().collection('users').get();

firebase.firestore().collection('users').where.onSnapshot(function (querySnapshot) {
    console.log(querySnapshot);
});
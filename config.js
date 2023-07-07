import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyDGW3MK_fp6gDy15jVfHbw5RkTbL9hfJpI",
    authDomain: "test-2266a.firebaseapp.com",
    projectId: "test-2266a",
    storageBucket: "test-2266a.appspot.com",
    messagingSenderId: "526872297052",
    appId: "1:526872297052:web:074f07e9ee968b545af099",
    measurementId: "G-BY1HTW3846"
};
if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};
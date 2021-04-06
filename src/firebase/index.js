import firebase from 'firebase/app'
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB1tzDGiPVE28SAZGDInWiKQ3BLopy4kas",
    authDomain: "devpro-2eb4b.firebaseapp.com",
    projectId: "devpro-2eb4b",
    storageBucket: "devpro-2eb4b.appspot.com",
    messagingSenderId: "846638165364",
    appId: "1:846638165364:web:0fda429cc2b1e6a8c9d021",
    measurementId: "G-WY1KE2ZFEN"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();
export {
    storage, firebase as default
} 
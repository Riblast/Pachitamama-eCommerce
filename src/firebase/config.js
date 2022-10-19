// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAgY2pnYVDNETbdpt5Uh5fPPmo6nklwKzA',
    authDomain: 'pachitamama-artesana.firebaseapp.com',
    projectId: 'pachitamama-artesana',
    storageBucket: 'pachitamama-artesana.appspot.com',
    messagingSenderId: '135683184477',
    appId: '1:135683184477:web:454d2735ac828879b27ab4'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
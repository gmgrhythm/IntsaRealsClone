import {initializeApp} from 'firebase/app'
import secret from './secrets'
import { getAuth,signInWithEmailAndPassword} from "firebase/auth";

let app = initializeApp(secret);
// from these three line I'm able to include firebase in my reactapp

export let auth = getAuth(app);
export {signInWithEmailAndPassword}
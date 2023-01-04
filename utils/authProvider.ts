import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
} from "firebase/auth";


const localStorageKey = "__user_access_token__";

export declare type UserCredential = {
  email: string;
  password: string;
}

const firebaseConfig = {
  apiKey: "AIzaSyBBIGuaL4VthgfuQAajV_lgycx6kIxFmcg",
  authDomain: "training-2021-153c1.firebaseapp.com",
  projectId: "training-2021-153c1",
  storageBucket: "training-2021-153c1.appspot.com",
  messagingSenderId: "824080689056",
  appId: "1:824080689056:web:ba64aefc6dd05e13baa6c5",
};

export const auth = getAuth(initializeApp(firebaseConfig));

export async function login({ email, password }: UserCredential) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((data: any) => {
      window.localStorage.setItem(localStorageKey, data?.user?.accessToken);
      return Promise.resolve(data);
    })
    .catch((error) => Promise.reject(error));
}

export async function register({ email, password }: UserCredential) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((data: any) => {
      window.localStorage.setItem(localStorageKey, data?.user?.accessToken);
      return Promise.resolve(data);
    })
    .catch((error) => Promise.reject(error));
}

export async function signOut() {
  window.localStorage.removeItem(localStorageKey);
  return signOutFirebase(auth);
}

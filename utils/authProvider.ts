import { initializeApp } from "firebase/app";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  initializeAuth,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
} from "firebase/auth";


const localStorageKey = "__user_access_token__";

export declare type UserCredential = {
  email: string;
  password: string;
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_IDENTITY_PLATFORM_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_IDENTITY_PLATFORM_AUTH_DOMAIN,
  projectId: "training-2021-153c1",
  storageBucket: "training-2021-153c1.appspot.com",
  messagingSenderId: "824080689056",
  appId: "1:824080689056:web:ba64aefc6dd05e13baa6c5",
};

export const firebaseAuth = initializeAuth(initializeApp(firebaseConfig), {
  persistence: browserSessionPersistence,
});

export async function login({ email, password }: UserCredential) {
  return signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((data: any) => {
      window.localStorage.setItem(localStorageKey, data?.user?.accessToken);
      return Promise.resolve(data);
    })
    .catch((error) => Promise.reject(error));
}

export async function register({ email, password }: UserCredential) {
  return createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((data: any) => {
      window.localStorage.setItem(localStorageKey, data?.user?.accessToken);
      return Promise.resolve(data);
    })
    .catch((error) => Promise.reject(error));
}

export async function signOut() {
  window.localStorage.removeItem(localStorageKey);
  return signOutFirebase(firebaseAuth);
}

import { initializeApp } from "firebase/app";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  initializeAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";


export declare type UserCredential = {
  email: string;
  password: string;
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_IDENTITY_PLATFORM_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_IDENTITY_PLATFORM_AUTH_DOMAIN,
};

export const firebaseAuth = initializeAuth(initializeApp(firebaseConfig), {
  persistence: browserSessionPersistence,
});

export async function login({ email, password }: UserCredential) {
  await signInWithEmailAndPassword(firebaseAuth, email, password);
}

export async function register({ email, password }: UserCredential) {
  await createUserWithEmailAndPassword(firebaseAuth, email, password);
}

export async function signOut() {
  await firebaseAuth.signOut();
}

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
};

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_IDENTITY_PLATFORM_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_IDENTITY_PLATFORM_AUTH_DOMAIN,
};

export const firebaseAuth: any = initializeAuth(initializeApp(firebaseConfig), {
  persistence: browserSessionPersistence,
});

export async function login({ email, password }: UserCredential) {
  await signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((res: any) => {
      const _accessToken = res.user?.accessToken || "";

      localStorage.setItem(LOCAL_STORAGE_KEY, _accessToken);
      return Promise.resolve(res);
    })
    .catch((error) => Promise.reject(error));
}

export async function register({ email, password }: UserCredential) {
  await createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((res: any) => {
      const _accessToken = res.user?.accessToken || "";

      localStorage.setItem(LOCAL_STORAGE_KEY, _accessToken);
      return Promise.resolve(res);
    })
    .catch((error) => Promise.reject(error));
}

export async function signOut() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  await firebaseAuth.signOut();
}

// ---------------------------------------------------------------------------

export const LOCAL_STORAGE_KEY = "__access__token__";


import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "./index";

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

export const Login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

export const Logout = async (email, password) => {
  try {
    signOut(auth)
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

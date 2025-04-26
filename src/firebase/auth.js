// firebase/auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './config';

export const handleSignup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // User signed up successfully
    return userCredential.user;
  } catch (error) {
    // Handle errors here
    throw error;
  }
};

export const handleLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // User logged in successfully
    return userCredential.user;
  } catch (error) {
    // Handle errors here
    throw error;
  }
};

export const handleLogout = async () => {
  try {
    await signOut(auth);
    // User logged out successfully
  } catch (error) {
    // Handle errors here
    throw error;
  }
};

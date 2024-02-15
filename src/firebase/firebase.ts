import {
    connectAuthEmulator,
    sendPasswordResetEmail,
    confirmPasswordReset
  } from 'firebase/auth';
  import { auth } from "./firebase-config";
  
//   const { REACT_APP_NODE_ENV } = process.env;
  const { REACT_APP_NODE_ENV } = process.env.REACT_APP_NODE_ENV;
  
  if (REACT_APP_NODE_ENV === 'development') {
    connectAuthEmulator(auth, "http://localhost:9099");
  }
  
  export const passwordReset = async (email: string) => {
    return await sendPasswordResetEmail(auth, email);ss
  }
  
  export const confirmThePasswordReset = async (
    oobCode: string, newPassword: string
  ) => {
    if (!oobCode && !newPassword) return;
  
    return await confirmPasswordReset(auth, oobCode, newPassword);
  }
  
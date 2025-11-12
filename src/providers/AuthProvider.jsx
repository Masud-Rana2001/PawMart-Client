import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import AuthContext from "../contexts/AuthContext";
import { auth } from "../firebase/firebase.config";


function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userError, setUserError] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();



  const signInWithGoogle = async () => {
    try {
      setIsUserLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      setCurrentUser(result.user);
      const token = await result.user.getIdToken();
        // LocalStorage এ সংরক্ষণ
       localStorage.setItem("accessTokenForPawMart", token);
      // await axios.post("https://paw-mart-server-one.vercel.app/set-token", {}, {
      //  headers: { authorization: `Bearer ${token}` }
      //   });
      toast.success("Sign Up Successful.")
    } catch (err) {
      console.log(err.message)
      setUserError(err.message);
      toast.error(err.message)
    } finally {
      setIsUserLoading(false);
    }
  };

  const signUpWithEmail = async (email, password, name, photo) => {
    try {
      setIsUserLoading(true);
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: name, photoURL: photo });
      setCurrentUser({ ...auth.currentUser });
      toast.success("Sign Up Successful.")
      
    } catch (err) {
      setUserError(err.message);
      toast.error(err.message)
    } finally {
      setIsUserLoading(false);
    }
  };


  const loginWithEmail = async (email, password) => {
    try {
      setIsUserLoading(true);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(user);
      const token = await user.getIdToken();
      localStorage.setItem("accessTokenForPawMart", token);
      toast.success("Sign In Successful.")
    } catch (err) {
      setUserError(err.message);
      toast.error(err.message)
    } finally {
      setIsUserLoading(false);
    }
  };


  const logout = async () => {
    signOut(auth);
    localStorage.removeItem("accessTokenForPawMart")
    toast.success("Logout Successful.")
  }

    const refreshUser = async () => {
    setCurrentUser({ ...auth.currentUser });
    };

  const profileUpdater = async (name,photo) => {
     try {

      await updateProfile(auth.currentUser, {
        displayName: name || currentUser.displayName,
        photoURL: photo || currentUser.photoURL,
      });
      refreshUser()
      toast.success("Profile updated successfully 🌿");
    } catch (error) {
      toast.error(`Failed to update profile ❌,${error.message}`);
    }
  };

  const handleForgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.info(` Please check your ${email} . Click the sended link and resel your password. Thank You 💐`)
    } catch (error) {
      setUserError(error)
      toast.error(error.message)
    }
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user || null);
      setIsUserLoading(false);
    });
    return () => unsubscribe();
  }, []);

 


  const value = {
    currentUser,
    setCurrentUser,
    userError,
    isUserLoading,
    signInWithGoogle,
    signUpWithEmail,
    loginWithEmail,
    logout,
    profileUpdater,
    handleForgotPassword
    
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

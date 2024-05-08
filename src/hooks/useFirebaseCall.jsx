import { useDispatch } from 'react-redux';
import {fetchStart, loginSuccess, logoutSuccess, registerSuccess, fetchFail} from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import {
    toastErrorNotify,
    toastSuccessNotify,
    toastWarnNotify,
  } from "../helpers/ToastNotify";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const useFirebaseCall = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const createUser = async (email, password, displayName) => {
        dispatch(fetchStart());
        try {
          let userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          await updateProfile(auth.currentUser, {
            displayName: displayName,
          });
          navigate("/");
          toastSuccessNotify("Registered successfully!");
          console.log(userCredential.user?.displayName);
          dispatch(registerSuccess(userCredential.user));
        } catch (error) {
            dispatch(fetchFail());
          console.log(error.message);
        }
      };

    

      const signIn = async (email, password) => {
        dispatch(fetchStart());
        try {
          const user = await signInWithEmailAndPassword(auth, email, password);
          navigate("/home");
          console.log(user.user?.displayName);
          dispatch(loginSuccess(user.user?.displayName));
          toastSuccessNotify("Logged in successfully!");
        } catch (error) {
          console.log(error.message);
        }
      };

     const logOut = () => {
        signOut(auth);
        dispatch(logoutSuccess());
        toastSuccessNotify("Logged out successfully!");
      };
      
      
     const signUpWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result.user?.displayName);
            dispatch(loginSuccess(result.user?.displayName));
            navigate("/home");
            toastSuccessNotify("Logged in successfully!");
          })
          .catch((error) => {
            // Handle Errors here.
            console.log(error);
          });
      };
      
     const forgotPassword = (email) => {
        sendPasswordResetEmail(auth, email)
          .then(() => {
            // Password reset email sent!
            toastWarnNotify("Please check your mail box!");
            console.log("Please check your mail box!");
          })
          .catch((err) => {
            toastErrorNotify(err.message);
            // alert(err.message);
            // ..
          });
      };


  
    return {createUser, signIn, logOut, signUpWithGoogle, forgotPassword}
}

export default useFirebaseCall
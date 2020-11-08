import  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
}

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res => {
      const {displayName, photoURL, email} = res.user;
      const signInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true
      }
      return signInUser;
    }) 
    .catch(err => {
      console.log(err);
      console.log(err.message);
    })
  }

  export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          photo: '',
          email: '',
          password: '',
          error: '',
          success: false,
        }
        return signedOutUser;
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
    })
  }

  export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      updateUserName(name);
      return {...res.user, success: true,  error: ''}
    })
    .catch(error => {
      // Handle Errors here.
      const errorMessage = error.message;
      return {success: false, error: errorMessage};
      // ...
    });
  }

  export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      const newUserInfo = res.user;
      return  {...newUserInfo,  error:'', success:true} ;
    })
    .catch(error => {
      const newUserInfo = {}
       newUserInfo.error = error.code;
       newUserInfo.message = error.message;
       return newUserInfo;
    });
  }

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name,
    }).then(() => console.log('user name updated sucessfully'))
    .catch(err => console.log(err))
  }
import React, {useState} from 'react';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext} from '../../App';
import { handleGoogleSignIn, initializeLoginFramework, handleSignOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';


function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    password: '',
  })
  initializeLoginFramework();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  const history = useHistory()
  const location = useLocation()

  let { from } = location.state || { from : { pathname: "/" } }

  const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res =>{
      setUser(res)
      setLoggedInUser(res)
      history.replace(from);
    })
  }

  const signOut = () => {
    handleSignOut()
    .then(res => {
      setUser(res)
      setLoggedInUser(res)
    })
  }
  
 
  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    } 
    
    if(e.target.name === 'password') {
      isFieldValid = e.target.value.length > 6
    }

    if(isFieldValid) {
      const newUserInfo = {...user}
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(user.password && user.email) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        setUser(res)
        setLoggedInUser(res)
        history.replace(from)
      })
    }
  }

  if(!newUser && user.email && user.password) {
    signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
      setUser(res)
      setLoggedInUser(res)
      history.replace(from)
    })
  }


  return (
    <div style={{textAlign:'center', marginTop: '20px'}}>
      { user.isSignedIn ?
        <button onClick={signOut}>Sign Out</button>:
        <button onClick={googleSignIn}>Sign In</button>
        
      }
      {
        user.isSignedIn && 
        <div>
          <p>Welcome, {user.name} </p>
          <p>Your Email: {user.email} </p>
          <img src={user.photo} alt="user"/>
        </div>
      }
      <form onSubmit={handleSubmit} >
        <label htmlFor="newUser">New user Sign up</label><br/>
        <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} id="newUser"/> <br/>
        { newUser && 
          <div>
            <label htmlFor="name">Your Name: </label>
            <input onBlur={handleBlur} type="text" name="name" id="name" required/> <br/>
          </div>
        }
        <label htmlFor="email">Your Email: </label>
        <input onBlur={handleBlur} type="email" name="email" id="email" required/> <br/>
        <label htmlFor="password">Your Password: </label>
        <input onBlur={handleBlur} type="password" name="password" id="password" required/><br/>
        <input type="submit" value="Submit"/>
      </form>
        {user.success ? <p style={{color:'green'}} >User {newUser ? 'Created' : 'logged in'} successfully</p> : <p style ={{color: 'red'}} > {user.error} </p>}
    </div>
  );
}

export default Login;

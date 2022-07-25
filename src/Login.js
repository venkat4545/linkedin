import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {
    const forgot=()=>{
        auth.sendPasswordResetEmail(email)
        alert("email has sent sucess");
    };
    const [email, setEmail]=useState("");
    const [password, setPassword] =useState("");
    const [name, setName]=useState("");
    const [profilePic,setProfilepic]=useState("");
    const dispatch =useDispatch();
    const register=()=>{
        if(!name){
            alert("please enter the name");
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) =>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:name,
                    photoURL:profilePic,
                }));
            });
        }).catch((error=>alert(error)));
         
    };
    const logintoapp=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    photoURL:userAuth.user.photoURL,

            }))
        }).catch((error=>alert(error)));
    };

    return (
        <div className="Login">
            <img src="https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/08/22/2239036-278341799.jpg?itok=JWRqZrva " alt="" />
        <form>
            <input value={name} onChange={(e) =>setName(e.target.value)} placeholder=" Full name(required if registering)" type="text" />
            <input value={profilePic} onChange={(e) =>setProfilepic(e.target.value)} placeholder="profile url(optional)" type="text" />
            <input value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Email" type="email" />
            <input value={password} onChange={(e) =>setPassword(e.target.value)} placeholder="Password" type="password" />
            <button type="submit" onClick={logintoapp}>Sign in </button>
        </form>
        <div className="para">
        <p >not a member ? 
        <span className="login_register" onClick={register}>Register now</span></p>
        
       
           <span className="forgot" onClick={forgot}>Forgot password ?</span>
           </div>
        
        </div>
    )
}

export default Login

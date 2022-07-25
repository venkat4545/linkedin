import React, { useEffect, useState } from 'react'
import './Post.css'
import InputOption from './InputOption';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import ChatTwoToneIcon from '@material-ui/icons/ChatTwoTone';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import { Avatar } from '@material-ui/core';
import {  useSelector } from 'react-redux';
import {  selectUser } from './features/userSlice';
import { db } from './firebase.js';
import firebase from 'firebase'




function Post({name,description,message,photoUrl,currentDateTime,msg}) {
    const user = useSelector(selectUser); 
    const[input, setInput]=useState("");
    const[comments,setComments]=useState([]);
    useEffect(()=>{
        db.collection("comments")
        .onSnapshot(snapshot=>
            setComments(
                snapshot.docs.map(doc=>({
                
                    id:doc.id,
                    data: doc.data(),
                
            }))
        )
        );
    },[]);

    const comment=e=>{
        e.preventDefault();
        db.collection('comments').add({
            name : user.displayName,
            email : user.email,
            msg:input,
            
        });
        setInput("");

    };
   const like=()=>{
   };
    return (
        <div className="post">
            <div className="post_heaader">
          <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
           <div className="post_info">
               <h1>{name}</h1>
               <h6>{currentDateTime}</h6>
               <h5>{description}</h5>
               
               
               </div> 
               </div>
            <div className="post_body">
                <p>{message}</p>
                
                {photoUrl} 
            </div>
            
            <div className="post_buttons">
                <InputOption  Icon={ThumbUpAltTwoToneIcon} title="Like" onClick={like}/>
                <InputOption Icon={ChatTwoToneIcon} title="comment" /> 
                <InputOption Icon={ShareTwoToneIcon} title="share"/>
                <InputOption Icon={SendTwoToneIcon} title="send"/>
                <h6>{msg}</h6>
            </div>
            <div className="comm">
            <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder="comment here"  /><input type="submit" className="sub" value="post"  onClick={comment} />
            </div>
            
        </div>
        
    )
}

export default Post

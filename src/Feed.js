import React,{useState, useEffect} from 'react'
import './Feed.css'
import Post from './Post.js'
import CreateIcon from "@material-ui/icons/Create";
import InputOption from './InputOption.js';
import ImageIcon from "@material-ui/icons/Image";
import DuoIcon from '@material-ui/icons/Duo';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import {db} from './firebase.js';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Feed() {
    const[input, setInput]=useState("");
    const[posts,setPosts]=useState([]);
    const user= useSelector(selectUser);
    const[comments,setComments]=useState([]);

    useEffect(()=>{
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot=>
            setPosts(
                snapshot.docs.map(doc=>({
                
                    id:doc.id,
                    data: doc.data(),
                
            }))
        )
        );
    },[]);


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

    const sendPost=e=>{
        e.preventDefault();
        db.collection('posts').add({
                name : user.displayName,
                description : user.email,
                message:input,
                photoUrl:user.photoUrl || " ",
                currentDateTime: Date().toLocaleString(),
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");

    };



    return (
        <div className="feed">
            <div className="feed_inputcontainer">
                <div className="feed_input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text" />
                    <button onClick ={sendPost}type="submit">Send</button>
                </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption Icon={ImageIcon} title="photos" color="blue" />
                    <InputOption Icon={DuoIcon} title="videos" color="pink" />
                    <InputOption Icon={EventNoteTwoToneIcon} title="Events" color="red" />
                    <InputOption Icon={DescriptionTwoToneIcon} title="write article" color="green" />
                    
                </div>
            </div>
            {posts.map(({id,data:{name,description,message,photoUrl,currentDateTime}})=>(
                
                <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                currentDateTime={currentDateTime}
               
                />
            ))}
            {comments.map(({id,data:{msg}})=>(
                
                <Post
                key={id}
                msg={msg}
               
                />
            ))}
            
        </div>
    )
}
export default Feed
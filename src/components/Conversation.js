import { useDispatch, useSelector } from "react-redux"

import { addMessage, userSelector } from "../features/counter/usersReducer";

import Styles from "./conversation.module.css";

import profile from "../data/profile/profile.png";

import call from "../images/call.png";

import videoCall from "../images/video-call.png";

import attachement from "../images/attachement.png";

import camera from "../images/camera.png";

import smile from "../images/smile.png";

import { useEffect, useRef, useState } from "react";

function useValue(){

    const value = useSelector(userSelector);

    return value;
}


export function Conversation(){

    const dispatch = useDispatch();

    const {showConversation}=useValue();

    const [message,setMessage]=useState();

    const messageEnd =useRef(null);

    const messageField=useRef();


    const handleSubmit =(e)=>{

        e.preventDefault()

        dispatch(addMessage(message))

        messageField.current.value=""

    }

    useEffect(()=>{

        messageEnd.current?.scrollIntoView();

    },[showConversation])

    return(

        <>

            <div className={Styles.coversationDiv}>

                <div className={Styles.header}>

                    <img src={profile} alt="profile" className={Styles.profile}/>

                    <div className={Styles.shortdetails}>

                        <h3>{showConversation[0].name}</h3>

                        <p>{"Online"}</p>

                    </div>

                    <div className={Styles.calls}>

                        <img src={call} alt="call"/>

                        <img src={videoCall} alt="video_call"/>

                    </div>
                </div>

                <div className={Styles.coversationBody}> 

                    {showConversation[0].convo.map((s)=>(

                        <>

                            {s.you?<div className={Styles.friendmessage}><h6>{s.you}</h6></div>:null}

                            {s.friend?<div className={Styles.yourmessage}><h6>{s.friend}</h6></div>:null}

                            <br></br>
                        </>
                    ))}

                    <div ref={messageEnd}/>

                </div>

                <div className={Styles.footer}>

                    <img src={smile} className={Styles.smile} alt="smile"/>

                    <form onSubmit={handleSubmit}>

                        <input class={Styles.messagebox}
                               onChange={(e)=>setMessage(e.target.value)}
                               type="text"
                               ref={messageField}
                               placeholder="Type message..."
                               aria-label="Search"
                        />
                        <button class={Styles.messagebtn}
                                type="submit"
                        > Send </button>

                    </form>

                    <div className={Styles.attachements}>

                        <img src={attachement} alt="attchement"/>

                        <img src={camera} alt="camera"/>

                    </div>

                </div>

            </div>

        </>

    )

}
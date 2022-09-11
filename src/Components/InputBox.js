import React, { useContext } from 'react'
import { MdSend } from "react-icons/md"
import db from '../firebase';
import MainContext from '../MainContext'
import firebase from 'firebase/app';
const InputBox = () => {
    const { input, setInput, messages, username } = useContext(MainContext);
    const sendMessage = (event) => {
        event.preventDefault();
        if (input) {
            var visible = -1;
            if (messages.length > 0) {
                if (messages[messages.length - 1].data.username === username) {
                    if(new Date().getSeconds()-new Date(messages[messages.length-1].data.timestamp.toDate()).getSeconds()>90){
                        visible =-1;
                    }else{
                         visible = 1;
                    }
                }
            }

            db.collection('messages').add({ username: username, text: input, timestamp: firebase.firestore.FieldValue.serverTimestamp(), visible: visible })
            setInput("");
            
        }

    }

    return (
        <div className='input-box' >
            <form className='input-form'>
            <input className='message-input' onChange={(e) => setInput(e.target.value)} value={input} type={"text"} placeholder="Type something..." />

                <button type='submit' className='message-btn' onClick={sendMessage}>
                    <MdSend />
                </button>
            </form>

        </div>
    )
}

export default InputBox
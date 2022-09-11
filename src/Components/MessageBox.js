import React, { useContext, useRef, useEffect } from 'react'
import MainContext from '../MainContext'
import Message from './Message';
const MessageBox = () => {
  const bottomRef = useRef(null);
  const { messages } = useContext(MainContext);
console.log(messages)
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView();
  }, [messages]);
  return (
    
    <div className='message-box' >
      
        {messages.map(({data}) => (
          <Message key={data.userID} msg={data} />
        ))}
        
      <div ref={bottomRef} />
    </div>
    
  )
}

export default MessageBox
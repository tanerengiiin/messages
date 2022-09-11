import React, { useContext, useRef, useEffect } from 'react'
import MainContext from '../MainContext'
import Message from './Message';
const MessageBox = () => {
  const bottomRef = useRef(null);
  const { messages } = useContext(MainContext);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView();
  }, [messages]);
  return (
    
    <div className='message-box' >
      
        {messages.map(({data,id}) => (
          <Message key={id} msg={data} />
        ))}
        
      <div ref={bottomRef} />
    </div>
    
  )
}

export default MessageBox
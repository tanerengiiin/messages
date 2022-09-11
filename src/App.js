import Header from './Components/Header';
import './App.css';
import MessageBox from './Components/MessageBox';
import InputBox from './Components/InputBox';
import MainContext from './MainContext';
import { useEffect, useState } from 'react';
import db from './firebase';


function App() {

  const [input, setInput] = useState('');
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([{}])

  useEffect(() => {
    setUsername(prompt("Please enter your name"))
  }, [])

  useEffect(() => {


    db.collection("messages").orderBy('timestamp')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id:doc.id ,data:doc.data()})))
        // setMessages(snapshot.docs.map)
      })
  },[]);

  const data = {
    input,
    setInput,
    messages,
    setMessages,
    username
  };
  if (messages.length > 1) {
    return (
      <div className="App">
        <MainContext.Provider value={data}>
          <Header />
          <MessageBox />
          <InputBox />

        </MainContext.Provider>
      </div>
    )
  } else {
    return <div>Yükleniyor...</div>
  }

}

export default App;

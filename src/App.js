import Header from './Components/Header';
import './App.css';
import MessageBox from './Components/MessageBox';
import InputBox from './Components/InputBox';
import MainContext from './MainContext';
import { useEffect, useState } from 'react';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [input, setInput] = useState('');
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([{}])
  const [login,setLogin]=useState(false);
  const [photoUrl,setPhotoUrl]=useState("");
  const [userID,setUserID]=useState("");
  useEffect(() => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    setUserID(user.uid)
    setUsername(user.displayName)
    setPhotoUrl(user.photoURL)
    db.collection("messages").orderBy('timestamp')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id:doc.id ,data:doc.data()})))
        // setMessages(snapshot.docs.map)
      })
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }, [])

  // useEffect(() => {


  //   db.collection("messages").orderBy('timestamp')
  //     .onSnapshot(snapshot => {
  //       setMessages(snapshot.docs.map(doc => ({id:doc.id ,data:doc.data()})))
  //       // setMessages(snapshot.docs.map)
  //     })
  // },[]);

  const data = {
    input,
    setInput,
    messages,
    setMessages,
    username,
    photoUrl,
    userID
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

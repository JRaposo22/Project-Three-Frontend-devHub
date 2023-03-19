import React, { useState, useContext } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Picker from "emoji-picker-react";
import { Theme } from 'emoji-picker-react';
import { AuthContext } from '../context/auth.context';


//Send message component
const SendMessage = ({scroll}) => {
  
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const { user, loggedIn, logout } = useContext(AuthContext);



  const submitMessage = async (event) => {
    event.preventDefault();
    //Checks if there's any writen message
    if (inputStr.trim() === "") {
      alert("Enter valid message");
      return;
    }
    //Gets the current user logged in in firebase
    const { uid, displayName } = auth.currentUser;
    const photoURL = user.imageUrl;
    //Adds a message to firebase DB
    await addDoc(collection(db, "messages"), {
      text: inputStr,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setInputStr("");
    setShowPicker(false) //Hides emoji picker
    scroll.current.scrollIntoView({ behavior: "smooth" }); //Scrolls to the bottom of the screen
  }

  return (
    <div>
    
    
    <form onSubmit={(event) => submitMessage(event)} className="send-message">
     
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <div className="picker-div">
      {/*------------ Emoji picker------------- */}
    {showPicker && (                                                                             
      <Picker className="picker" theme="dark" width={300} height={400}  onEmojiClick={(emojiObject)=> setInputStr((prevMsg)=> prevMsg + emojiObject.emoji)}/> 
    )}                                                                                  {/* Adds the emoji to the string to send */}
    </div>
      <input
        id="messageInput"
        name="messageInput"
        className="form-input__input"
        input='text'
        placeholder="type message..."
        value={inputStr}
        onChange={(e) => setInputStr(e.target.value)}
      />
       {/* Icon to open or close the emoji picker */}
       <img
          className="emoji-icon"
          src="https://res.cloudinary.com/dkoe4o8w1/image/upload/v1678969768/devHub/icon-256x256_cato91.png"
          onClick={() => setShowPicker((val) => !val)}     
        />
       
      
      
      <button type="submit">Send</button>
    </form>
    </div>
  );
};
export default SendMessage;
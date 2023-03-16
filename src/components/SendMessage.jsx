import React, { useState, useContext } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Picker from "emoji-picker-react";
import { Theme } from 'emoji-picker-react';
import { AuthContext } from '../context/auth.context';



const SendMessage = ({scroll}) => {
  
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const { user, loggedIn, logout } = useContext(AuthContext);



  const submitMessage = async (event) => {
    event.preventDefault();
    if (inputStr.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    const photoURL = user.imageUrl;
    await addDoc(collection(db, "messages"), {
      text: inputStr,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setInputStr("");
    setShowPicker(false)
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
    
    
    <form onSubmit={(event) => submitMessage(event)} className="send-message">
     
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <div className="picker-div">
    {showPicker && (
      <Picker className="picker" theme="dark" width={300} height={400}  onEmojiClick={(emojiObject)=> setInputStr((prevMsg)=> prevMsg + emojiObject.emoji)}/> 
    )}
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
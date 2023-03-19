import React, { useEffect, useState, useRef } from "react";
import {query,collection,orderBy,onSnapshot,limit,} from "firebase/firestore";
import { db } from "../../firebase";
import Message from "../../components/Message";
import SendMessage from "../../components/SendMessage";
import './ChatBox.css'

//Chatbox page
//Page that receives the send message and all the existing messages
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  
  //Fetches the messages in the DB
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    //Set all the messages from the firebase DB to the useState variable
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

 

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll}/>
    </main>
    
  );
};
export default ChatBox;
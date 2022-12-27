import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((c) => (
        <div key={chats._id}>{c.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;

import { createContext, useContext, useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  console.log("render=================================");
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);

  // const history = useHistory();
  // console.log(history, "history");
  useEffect(
    () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUser(userInfo);
      // if (!userInfo) history.push("/");
    },
    [
      // history
    ]
  );
  return (
    <ChatContext.Provider
      value={
        user
          ? { user, setUser, selectedChat, setSelectedChat, chats, setChats }
          : {}
      }
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;

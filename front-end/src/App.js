import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
// import Login from "./Components/Authentication/Login";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />

      <Route path="/chats" component={ChatPage} />

      {/* <Route path="/rs" component={Login} /> */}
    </div>
  );
}

export default App;

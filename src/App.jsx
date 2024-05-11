import LoginPage from "./page/LoginPage";
import { useState } from "react";
import RoomPage from "./page/RoomPage";
import ChatPage from "./page/ChatPage";


const App = () => {
const [isAuth,setIsAuth] = useState(localStorage.getItem('token'));

const [room,setRoom]= useState(null)

if(!isAuth) return <LoginPage setIsAuth={setIsAuth}/>;


  return (
  <div className="container">
    {room 
    ? 
    <ChatPage  room={room} setRoom={setRoom}/>
    :
    (<RoomPage setRoom={setRoom} setIsAuth={setIsAuth}/>)}
    </div>
    );
};

export default App

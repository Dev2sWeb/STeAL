import '../components/chatting/LogStyle.css';
import React from 'react';
import { ChatEngine } from 'react-chat-engine'
// import {ChatFeed} from './components/ChatFeed'
// import { IsTyping } from 'react-chat-engine';
import { ChatFeed } from 'react-chat-engine';
import Login from '../components/chatting/Login';
const projectid= '3888cdc6-9fd4-4ef5-bb75-51518c2a2dc4';
export function Chat() {
  if (!localStorage.getItem('userName')) return <Login />;
  return (
    <>
    <ChatEngine
      height="100vh"
      publicKey={projectid}
      userName={localStorage.getItem('userName')}
      userSecret={localStorage.getItem('passWord')}
      renderChatFeed = {(chatprops)=><ChatFeed {...chatprops}/>}            
    />
    {/* <IsTyping/> */}
    </>
  )
}

export default Chat;

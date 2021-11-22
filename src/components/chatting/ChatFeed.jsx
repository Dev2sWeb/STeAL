import React from 'react'
import {NewMessageForm} from 'react-chat-engine'
// import { ChatHeader } from 'react-chat-engine';
import Mymesg from './Mymesg.jsx';
import OthersMesg from './OthersMesg.jsx';
export const ChatFeed = (props) => {
    const {chats,activeChat,userName,messages}=props;
    const chat = chats && chats[activeChat];
    // console.log(chat,userName,messages);
    
    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map((key,index)=>{
            const mesg = messages[key];
            const lastmesgkey = index === 0 ? null : keys[index-1];
            const isMine = userName === mesg.sender.username;
            return(
                <div key={`mesg_${index}`} style={{width:'100%'}}>
                    <div className="mesg-block">
                        {
                            isMine ? <Mymesg message={mesg}/> : <OthersMesg message={mesg} lastmesg={messages[lastmesgkey]}/>
                        }
                    </div>
                    <div className="read-receipts" style={{marginLeft : isMine ? '0px' : '68px' , marginRight : isMine ? '18px' : '0px'}}>
                        {renderReadReceipts(mesg,isMine)}
                    </div>
                </div>
            )
        })
    }
    const renderReadReceipts = (message, isMine) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
          key={`read_${index}`}
          className="read-receipt"
          style={{
            float: isMine ? 'right' : 'left',
            backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
          }}
        />
      ));
    
    if (!chat) {
        return 'Loading...';
    }
    return (
        <div className="chat-feed">            
            <div className="chat-title-container">
                <div className="chat-title">
                    {chat?.title}
                </div>
                <div className="chat-subtitle">
                    {chat.people.map((person)=>` ${person.person.username} `)}
                </div>
            </div>
            {/* <div className='chat-title-container'></div>
            <div className="chat-title">
            <ChatHeader />
            </div> */}
            {renderMessages()}
            <div style={{height:'100px'}}>
                <div className="mesg-form-container">
                    <NewMessageForm {...props} chatId={activeChat}/>
                </div>
            </div>
        </div>
    )
}

// export default {ChatFeed};

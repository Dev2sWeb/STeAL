import React from 'react'

const OthersMesg = ({lastmsg,message}) => {
    const veryfirstmsg = !lastmsg || lastmsg.sender.userName !== message.sender.userName;
    return (
        <div className="mesg-row">
            {veryfirstmsg && (
                <div className="mesg-avatar" style={{backgroundImage: `url(${message?.sender?.avatar})`}} />                
            )}
            {message?.attatchments?.length > 0 ?
                    (
                        <img src={message.attatchments[0].file} alt="message img here" className="mesg-image" style={{margin : veryfirstmsg ? '4px' : '48px'}}/>
                    ) :
                    (
                        <div className="message" style={{float:'left',color:'white',backgroundColor:'blue',margin : veryfirstmsg ? '4px' : '48px'}}>
                            {message.text}
                        </div>
                    )
                }            
        </div>
    )
}

export default OthersMesg

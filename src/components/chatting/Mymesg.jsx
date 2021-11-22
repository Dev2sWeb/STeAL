import React from 'react'

const Mymesg = ({message}) => {
    if (message?.attatchments?.length > 0) {
        return(
            <img src={message.attatchments[0].file} alt="message img here" className="mesg-image" style={{float : 'right'}}/>
        );
    }
    return (
        <div className="message" style={{float:'right',marginRight:'18px',color:'darkgreen',backgroundColor:'orange'}}>
            {message.text}
        </div>
    )
}

export default Mymesg

import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../MainContext'

const Message =({ msg }) => {
    const { userID,username } = useContext(MainContext);
    const isUser = userID === msg.userID;
    const [date, setDate] = useState("");

    const dayFormat = (dayNum) => {
        var day = "";
        switch (dayNum) {
            case 0:
                day="Pazar"
                break;
            case 1:
                day="Pazartesi"
                break;
            case 2:
                day="Salı"
                break;
            case 3:
                day="Çarşamba"
                break;
            case 4:
                day="Perşembe"
                break;
            case 5:
                day="Cuma"
                break;
            case 6:
                day="Cumartesi"
                break;
        }
        if(new Date().getDay()===dayNum){
            day="Bugün";
        }
        return day;
    }
    useEffect(() => {
        if (msg.timestamp) {
            var dt = new Date(msg.timestamp.toDate())
            var hour=dt.getHours()<10 ? "0"+dt.getHours():dt.getHours();
            var min=dt.getMinutes()<10 ? "0"+dt.getMinutes():dt.getMinutes();
            setDate(dayFormat(dt.getDay())+" " +hour + ":" + min)
        }

    }, [])
    if (isUser) {
        return (
            <div  className={`message-con message-user`}>
                <div className='msg-detail'>
                    {
                        msg.visible === -1 && <div className='date' style={{ marginBottom: "10px" }}>{dayFormat(new Date().getDay())+" "+new Date().getHours() + ":" + new Date().getMinutes()}</div>
                    }
                    <div className='message'>
                        {msg.text}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div  className={`message-con`}>
                {
                    msg.visible === -1 && <div className='msg-img'>
                        <img src={msg.photoURL} alt='yok' />
                    </div>
                }

                <div className='msg-detail'>
                    {
                        msg.visible === -1 && <div className='username-con'>
                            <div className='username' >{msg.username}</div>
                            <div className='date'>{date}</div>
                        </div>
                    }
                    <div className='message' style={{ marginLeft: msg.visible === 1 ? "40px" : "0px" }}>

                        {msg.text}
                    </div>
                </div>

            </div>
        )
    }
}

export default Message
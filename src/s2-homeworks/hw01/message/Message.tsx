import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
type HW1MessageType = {
    id: number
}
export type MessagePropsType = {
    message: HW1MessageType,
    avatar: string,
    name: string,
    text: string,
    time: string
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}

                    // создаёт студент
                    src={props.avatar}
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        <h1>{props.name}</h1>
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        <p>{props.text}</p>
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                <p>{props.time}</p>
                {/**/}
            </div>
        </div>
    )
}

export default Message

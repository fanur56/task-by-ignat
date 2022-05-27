import React from 'react'
import styles from './Message.module.css'


type TypeMessageData = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: TypeMessageData) {
    return (
        <div className={styles.name}>
            <div className={styles.messageInstance}>
                <div>
                    <img alt='ava' className={styles.img} src={props.avatar}/>
                </div>
                <div>
                    <div className={styles.messageText}>
                        <div className={styles.userName}>{props.name}</div>
                        <div className={styles.userMessage}>
                            {props.message}
                        </div>
                        <div className={styles.userMessageTime}>
                            {props.time}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Message


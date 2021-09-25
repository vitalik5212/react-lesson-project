import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Valera'},
        {id: 2, name: 'Ihor'},
        {id: 3, name: 'Stepan'},
        {id: 4, name: 'Vadim'},
        {id: 5, name: 'Ira'},
    ];

    let messages = [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'Hello'},
        {id: 3, text: 'How are you?'},
        {id: 4, text: 'Fine'},
        {id: 5, text: 'Good'},
    ];

    let dialogElements = dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageElements = messages
        .map(message => <MessageItem text={message.text}/>);

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
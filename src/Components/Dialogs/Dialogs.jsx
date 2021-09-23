import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

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
    ]

    const DialogItem = (props) => {

        let path = '/dialogs/' + props.id;

        return (
            <div className={s.dialog}>
                <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        )
    }

    const Message = (props) => {
        return <div className={s.message}>{props.text}</div>;
    }

  return (
    <div>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogs[0].name} id={dialogs[0].id} />
                <DialogItem name={dialogs[1].name} id={dialogs[0].id} />
            </div>
            <div className={s.messages}>
                <Message text={messages[0].text} />
                <Message text={messages[1].text} />
            </div>
        </div>
    </div>
  );
}

export default Dialogs;
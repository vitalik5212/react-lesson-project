import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {

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
                <DialogItem name='Valera' id='1' />
                <DialogItem name='Ihor' id='2' />
                <DialogItem name='Stepan' id='3' />
                <DialogItem name='Vadim' id='4' />
                <DialogItem name='Ira' id='5' />
            </div>
            <div className={s.messages}>
                <Message text='Hi' />
                <Message text='Hello' />
                <Message text='How are you?' />
                <Message text='Fine' />
                <Message text='Good' />
            </div>
        </div>
    </div>
  );
}

export default Dialogs;
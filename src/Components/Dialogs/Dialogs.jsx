import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={s.active}>Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={s.active}>Ihor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={s.active}>Olha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Ok</div>
            </div>
        </div>
    </div>
  );
}

export default Dialogs;
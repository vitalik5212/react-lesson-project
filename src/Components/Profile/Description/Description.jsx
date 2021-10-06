import React from "react";
import s from './Description.module.css';

const Description = (props) => {
    return (
        <div>
            <div className={s.mainImg}>
                <img alt="img"
                     src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default Description;
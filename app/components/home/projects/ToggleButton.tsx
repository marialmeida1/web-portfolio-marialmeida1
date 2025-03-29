'use client'

// React
import { useState } from 'react';

// Style
import style from './ToggleButton.module.css'

export default function ToggleButton() {
    const [showMe, setShowMe] = useState(false);
    function toogle() {
        setShowMe(!showMe);
    }

    return (
        <div className={style.togglebutton}>
            <p onClick={toogle} className={showMe ? style.togglebutton__active : style.togglebutton__inactive} >Desenvolvimento</p>
            <p onClick={toogle} className={showMe ? style.togglebutton__inactive : style.togglebutton__active}>Design</p>
        </div>
    );
}
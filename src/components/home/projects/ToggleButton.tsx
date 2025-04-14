"use client"

// React
import { useState } from 'react';

// Style
import style from './ToggleButton.module.css'

interface ToggleButtonProps {
    label1: string;
    label2: string;
    initialState?: boolean; // Valor inicial para 'showMe' (opcional)
}

export default function ToggleButton({ label1, label2, initialState = false }: ToggleButtonProps) {
    const [showMe, setShowMe] = useState(initialState);

    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <div className={style.togglebutton}>
            <p onClick={toggle} className={showMe ? style.togglebutton__active : style.togglebutton__inactive}>
                {label1}
            </p>
            <p onClick={toggle} className={showMe ? style.togglebutton__inactive : style.togglebutton__active}>
                {label2}
            </p>
        </div>
    );
}

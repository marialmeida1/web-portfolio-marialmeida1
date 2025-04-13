"use client"
import { useState } from "react";

// Image
import Image from 'next/image'
import brazil from '@/public/img/flags/brazil.png';
import eua from '@/public/img/flags/eua.png';

// Style
import style from './ToggleLanguage.module.css'

export default function ToggleLanguage() {
    const [showMe, setShowMe] = useState(false);
    function toogle() {
        setShowMe(!showMe);
    }

    return (
        <div onClick={toogle} className={`showMe ? ${style.tooglelang} ${style.rotate} : style.tooglelang`}>
            <Image src={showMe ? brazil : eua} alt="Brazil Flag" width={32} />
        </div >
    );
}
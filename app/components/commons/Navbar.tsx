"use client"

import { useEffect, useState } from "react";
// Style
import style from "./Navbar.module.css";

// Componentes
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";

// Rotas
import { usePathname } from "next/navigation";

export default function Navbar() {

    const [notAtTop, setNotAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNotAtTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <header className={`${style.navbar} ${isHomePage ? "" : style.bg__color} ${notAtTop ? style.bg__color : ''}`}>
            <h1 className={`${style.navbar__title} ${isHomePage && !notAtTop ? style.white__text : ""}`}>&lt;Mariana/&gt;</h1>

            <ul className={style.navbar__actions}>
                <li><ToggleLanguage /></li>
                <li><ToggleTheme /></li>
            </ul>
        </header>

    )
}
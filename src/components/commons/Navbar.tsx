"use client"

// React
import { useEffect, useState } from "react";
import Link from "next/link";

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
    const isHomePage = pathname === "/pt" || pathname === "/en";

    return (
        <header className={`${style.navbar} ${isHomePage ? "" : style.bg__color} ${notAtTop ? style.bg__color : ''}`}>
            <Link href="/" className={`${style.navbar__title} ${isHomePage && !notAtTop ? style.white__text : ""}`}>&lt;Mariana/&gt;</Link>

            <ul className={style.navbar__actions}>
                <li><ToggleLanguage /></li>
                <li><ToggleTheme /></li>
            </ul>
        </header>

    )
}
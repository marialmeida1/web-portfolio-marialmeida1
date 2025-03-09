"use client"

// Style
import style from "./Navbar.module.css";

// Componentes
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";

// Rotas
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <header className={style.navbar}>
            <h1 className={`${style.navbar__title} ${isHomePage ? style.white__text : ""}`}>Mariana</h1>

            <ul className={style.navbar__actions}>
                <li><ToggleLanguage /></li>
                <li><ToggleTheme /></li>
            </ul>
        </header>
    )
}
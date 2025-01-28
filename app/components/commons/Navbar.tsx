// Style
import style from "./Navbar.module.css";

// Componentes
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
    return (
        <header className={style.navbar}>
            <h1 className={style.navbar__title}>Mariana</h1>

            <ul className={style.navbar__actions}>
                <li><ToggleLanguage /></li>
                <li><ToggleTheme /></li>
            </ul>
        </header>
    )
}
import style from "./Navbar.module.css";
import ToggleLanguage from "./ToggleLanguage";

export default function Navbar() {
    return (
        <header className={style.navbar}>
            <h1 className={style.navbar__title}>Mariana</h1>

            <ul className={style.navbar__actions}>
                <li><ToggleLanguage /></li>
                <li>Toggle</li>
            </ul>
        </header>
    )
}
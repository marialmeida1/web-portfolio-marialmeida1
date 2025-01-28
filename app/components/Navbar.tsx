import style from "./Navbar.module.css";

export default function Navbar() {
    return (
        <header className={style.navbar}>
            <h1 className={style.navbar__title}>Mariana</h1>

            <nav>
                <ul>
                    <li>Brasil</li>
                    <li>Toggle</li>
                </ul>
            </nav>
        </header>
    )
}
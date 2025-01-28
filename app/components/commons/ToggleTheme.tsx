// Style
import style from './ToggleTheme.module.css'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


export default function ToggleTheme() {
    return (
        <ul className={style.toggletheme}>
            <li className={style.toggletheme__select}><FontAwesomeIcon icon={faSun} /></li>
            <li><FontAwesomeIcon icon={faMoon} /></li>
        </ul>
    )
}
'use client';
// Style
import style from './ToggleTheme.module.css';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

// React
import { useState, useEffect } from 'react';

export default function ToggleTheme() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Atualiza o tema no DOM quando o estado muda
    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            isDarkMode ? 'dark' : 'light'
        );
    }, [isDarkMode]);

    // Alterna o estado de tema
    function toggleTheme() {
        setIsDarkMode((prevMode) => !prevMode);
    }

    return (
        <ul className={style.toggletheme}>
            <li
                onClick={toggleTheme}
                className={!isDarkMode ? style.toggletheme__select : ''}
            >
                <FontAwesomeIcon icon={faSun} />
            </li>
            <li
                onClick={toggleTheme}
                className={isDarkMode ? style.toggletheme__select : ''}
            >
                <FontAwesomeIcon icon={faMoon} />
            </li>
        </ul>
    );
}

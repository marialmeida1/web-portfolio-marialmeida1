// Styles
import style from "./Networks.module.css"

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faGithub, faLinkedin, faMedium, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


export default function Networks() {
    return (
        <section className={style.networks}>
            <img className={style.networks__img} src="/img/banner/bg_web.png" alt="" />


            <div className={style.networks__iconContainer}>
                <a
                    className={style.networks__icons}
                    href="mailto:marianaalmeidafga@gmail.com?subject=Olá%20Mariana&body=Gostaria%20de%20falar%20com%20você%20sobre%20seu%20portfólio."
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>

                <a
                    className={style.networks__icons}
                    href="https://www.linkedin.com/in/marialmeidam/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                    className={style.networks__icons}
                    href="https://github.com/marialmeida1"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                    className={style.networks__icons}
                    href="https://www.behance.net/marianaalmeida51"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faBehance} />
                </a>

                <a
                    className={style.networks__icons}
                    href="https://medium.com/@marianaalmeidafga"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMedium} />
                </a>
            </div>
        </section>
    );
}
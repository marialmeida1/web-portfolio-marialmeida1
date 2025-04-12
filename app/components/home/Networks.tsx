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
                <div className={style.networks__icons}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <div className={style.networks__icons}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>

                <div className={style.networks__icons}>
                    <FontAwesomeIcon icon={faGithub} />
                </div>

                <div className={style.networks__icons}>
                    <FontAwesomeIcon icon={faBehance} />
                </div>

                <div className={style.networks__icons}>
                    <FontAwesomeIcon icon={faMedium} />
                </div>
            </div>

            <div className={style.networks__footer}>Copyright © 2025 Mariana Almeida. Todos os direitos reservados.</div>
        </section>
    );
}
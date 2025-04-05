// Style
import style from './CardProjects.module.css';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faFlutter, faPhp, faDartLang, faGit } from '@fortawesome/free-brands-svg-icons';

export default function CardProjects() {
    return (
        <article className={style.cardprojects}>
            <div className={style.cardprojects__icons}>
                <FontAwesomeIcon icon={faLaravel} />
                <FontAwesomeIcon icon={faFlutter} />
                <FontAwesomeIcon icon={faPhp} />
                <FontAwesomeIcon icon={faDartLang} />
                <FontAwesomeIcon icon={faGit} />
            </div>

            <div className={style.cardprojects__infos}>
                <div>
                    <h2>Girls in Ctrl - Aplicativo</h2>
                    <p>Aplicativo full-stack voltado para mulheres no mercado de TI.</p>
                </div>

                <div className={style.cardprojects__btn}>Ver mais</div>
            </div>
        </article>
    );
}
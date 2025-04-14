// Style
import style from './CardProjects.module.css';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faFlutter, faPhp, faDartLang, faGit } from '@fortawesome/free-brands-svg-icons';

// Language
import { CardProjectsContent } from '@/src/types/CardProjectsContent'

interface CardProjectsProps {
    content: CardProjectsContent
}

export default function CardProjects({ content }: CardProjectsProps) {
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
                    <h2>{content.title}</h2>
                    <p>{content.description_card}</p>
                </div>

                <div className={style.cardprojects__btn}>Ver mais</div>
            </div>
        </article>
    );
}
// Style
import style from './CardProjects.module.css';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconsMap } from "@/src/lib/fontawesome-icons";

// Language
import { CardProjectsContent } from '@/src/types/CardProjectsContent'

// React
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface CardProjectsProps {
    content: CardProjectsContent
    id: number
}

export default function CardProjects({ id, content }: CardProjectsProps) {

    const t = useTranslations();

    return (
        <Link href={`/projects/${id}`}>
            <article className={style.cardprojects}>
                <div className={style.cardprojects__icons}>
                    {content.icons.map((iconName, index) => {
                        const icon = iconsMap[iconName as keyof typeof iconsMap];
                        if (!icon) return null;
                        return <FontAwesomeIcon icon={icon} key={index} />;
                    })}
                </div>

                <div className={style.cardprojects__infos}>
                    <div>
                        <h2>{content.title}</h2>
                        <p>{content.description_card}</p>
                    </div>

                    <div className={style.cardprojects__btn}>{t('btn_seemore')}</div>
                </div>
            </article>
        </Link>
    );
}
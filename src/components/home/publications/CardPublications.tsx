// Styles
import style from "./CardPublications.module.css"

// Types
import { PublicationsInfoContent } from "@/src/types/PublicationsInfoContent";
import { useTranslations } from "next-intl";

interface PostProps {
    post: PublicationsInfoContent
}


export default function CardPublications({post}: PostProps) {

    const t = useTranslations();

    return (
        <article className={style.cardpublications}>
            <img className={style.cardpublications__img} alt={post.title} src={post.image}>
            </img>

            <div className={style.cardpublications__infos}>
                <div className={style.cardpublications__infos_text}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>

                <a href={post.link} target="_blanck">{t('btn_seemore')}</a>
            </div>
        </article>
    );
}
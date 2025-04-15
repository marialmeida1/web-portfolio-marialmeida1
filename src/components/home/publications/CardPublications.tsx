// Styles
import Image from "next/image";
import style from "./CardPublications.module.css"

// Types
import { PublicationsInfoContent } from "@/src/types/PublicationsInfoContent";

interface PostProps {
    post: PublicationsInfoContent
}


export default function CardPublications({post}: PostProps) {
    return (
        <article className={style.cardpublications}>
            <img className={style.cardpublications__img} alt={post.title} src={post.image}>
            </img>

            <div className={style.cardpublications__infos}>
                <div className={style.cardpublications__infos_text}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>

                <a href={post.link} target="_blanck"  >Saiba mais</a>
            </div>
        </article>
    );
}
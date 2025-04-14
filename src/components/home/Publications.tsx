// Styles
import style from "./Publications.module.css"

// Components
import CardPublications from "./publications/CardPublications";

// Types
import { PublicationsContent } from '@/src/types/PublicationsContent'

interface PublicationsProps {
    content: PublicationsContent
}

export default function({content}: PublicationsProps) {
    return(
        <section className={`container ${style.publications}`}>
            <h1>{content.title}</h1>
            
            <div className={style.publications__line}>
                <CardPublications />
                <CardPublications />
                <CardPublications />
            </div>
        </section>
    );
}
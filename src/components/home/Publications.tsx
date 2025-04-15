// Syles
import style from "./Publications.module.css"

// Components
import CardPublications from "./publications/CardPublications";

// Language
import { generatePublicationsContent } from "@/src/utils/GeneratePublicationsContent";

// XML
import { parseStringPromise } from 'xml2js';


export default function() {

    const publicationsContent = generatePublicationsContent();

    return(
        <section className={`container ${style.publications}`}>
            <h1>{publicationsContent.title}</h1>
            
            <div className={style.publications__line}>
                <CardPublications />
                <CardPublications />
                <CardPublications />
            </div>
        </section>
    );
}
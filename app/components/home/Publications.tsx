import style from "./Publications.module.css"
import CardPublications from "./publications/CardPublications";

export default function() {
    return(
        <section className={`container ${style.publications}`}>
            <h1>Publicações</h1>
            
            <div className={style.publications__line}>
                <CardPublications />
                <CardPublications />
                <CardPublications />
            </div>
        </section>
    );
}
import style from "./Publications.module.css"
import CardPublications from "./publications/CardPublications";

export default function() {
    return(
        <section>
            <h1>Publicações</h1>
            
            <div>
                <CardPublications />
            </div>
        </section>
    );
}
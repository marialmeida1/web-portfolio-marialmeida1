import style from "./CardPublications.module.css"

export default function CardPublications() {
    return (
        <article className={style.cardpublications}>
            <div className={style.cardpublications__img}>
                Image
            </div>

            <div className={style.cardpublications__infos}>
                <div className={style.cardpublications__infos_text}>
                    <h2>Girls in Ctrl - Aplicativo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odio,
                        voluptate ex vitae corrupti quia laborum voluptatem rem possimus tenetur.</p>
                </div>

                <a>Saiba mais</a>
            </div>
        </article>
    );
}
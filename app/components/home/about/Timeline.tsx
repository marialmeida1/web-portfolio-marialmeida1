// Estilo
import style from "./Timeline.module.css"

// Componentes
import ButtonTimeline from "./ButtonTimeline";

export default function Timeline() {
    return (

        <div className={style.timeline}>

            <div className={style.timeline__line} />


            <div className={style.timeline__section}>
                <p>Início dos estudos <br /> em <b>design</b></p>
                <ButtonTimeline month="Jun" year="2020" color="secondary" />
            </div>

            <div className={style.timeline__section}>
                <p>Início no Técnico <br /> em <b>Informática</b></p>
                <ButtonTimeline month="Mai" year="2021" color="primary" />
            </div>

            <div className={style.timeline__section}>
                <p>Apresentação de <br /> <b>TCC</b></p>
                <ButtonTimeline month="Nov" year="2023" color="primary" />
            </div>

            <div className={style.timeline__section}>
                <p><b>Formatura</b> no <br /> Técnico</p>
                <ButtonTimeline month="Mar" year="2024" color="secondary" />
            </div>

            <div className={style.timeline__section}>
                <p>Início na graduação <br /> em <b>Ciência da Comp.</b></p>
                <ButtonTimeline month="Mar" year="2024" color="secondary" />
            </div>

            <div className={style.timeline__section}>
                <p>Workshop <br /> <b>Devfest</b></p>
                <ButtonTimeline month="Out" year="2024" color="primary" />
            </div>
        </div>
    );
}
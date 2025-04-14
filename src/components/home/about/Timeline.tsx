// Estilo
import style from "./Timeline.module.css"

// Componentes
import ButtonTimeline from "./ButtonTimeline";

interface TimelineItem {
    description: string;
    month: string;
    year: string;
    color: string;
}

interface TimelineProps {
    content: TimelineItem[];
}

export default function Timeline({ content }: TimelineProps) {
    return (

        <div className={style.timeline}>

            <div className={style.timeline__line} />

            {content.map((item, index) => (
                <div key={index} className={style.timeline__section}>
                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                    <ButtonTimeline
                        month={item.month}
                        year={item.year}
                        color={item.color}
                    />
                </div>
            ))}
        </div>
    );
}
import style from "./ButtonTimeline.module.css"

type Props = {
    month: string;
    year: string;
    color: string;
}

export default function ButtonTimeline({month, year, color} : Props) {
    return (
        <div className={`${style[color]} ${style.btn}`}>
            {month}, {year}
        </div>
    );
}
// Styles
import style from "./Projects.module.css"
import ToggleButton from "./projects/ToggleButton";

export default function Projects() {
    return (
        <section className={`container ${style.projects}`}>
            <div className={style.projects__header}>
                <h1>Projetos</h1>
                <ToggleButton />
            </div>
        </section>
    );
}
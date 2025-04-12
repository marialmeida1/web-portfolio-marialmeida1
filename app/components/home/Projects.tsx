// Styles
import style from "./Projects.module.css"

// Componentes
import CardProjects from "./projects/CardProjects";
import ToggleButton from "./projects/ToggleButton";

export default function Projects() {
    return (
        <section className={`container ${style.projects}`}>
            <div className={style.projects__header}>
                <h1>Projetos</h1>
                <ToggleButton />
            </div>

            <div className={style.projects__line}>
                <CardProjects />
                <CardProjects />
                <CardProjects />
            </div>
        </section>
    );
}
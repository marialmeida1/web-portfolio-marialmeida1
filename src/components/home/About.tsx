// Estilo
import style from "./About.module.css"
import Stacks from "./about/Stacks.module";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Componentes
import Timeline from "./about/Timeline";

// Types
import { AboutContent } from '@/src/types/AboutContent'

interface AboutProps {
    content: AboutContent
}

export default function About({ content }: AboutProps) {
    return (
        <section className={`container ${style.about}`}>
            <h1>{content.about.title}</h1>
            <p>{content.about.description.text} <b>{content.about.description.cta}</b></p>

            <Timeline content={content.about.timeline} />

            <div className={style.about__stacks}>
                {content.about.stacks.map((item, index) => (
                    <Stacks key={index} name={item.name} title={item.title} description={item.description} />
                )
                )}
            </div>

            <div>
                <p className={style.about__cta}>
                    {content.about.cta.text}
                    <br />
                    {content.about.cta.cta}
                </p>

                <a href="/files/curriculo.pdf" download="curriculo.pdf" className={style.about__btncv}>
                    Download

                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
            </div>
        </section>
    );
}
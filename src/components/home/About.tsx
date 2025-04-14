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

export default function About({content}: AboutProps) {
    return (
        <section className={`container ${style.about}`}>
            <h1>{content.about.title}</h1>
            <p>Prazer, sou Mariana, mas pode me chamar de Mari! Sou desenvolvedora fullstack, apaixonada por transformar ideias em experiências incríveis
                para os usuários. Com o tempo, tenho aprimorado meus conhecimentos, sempre focada em entregar um código de qualidade e proporcionar a melhor
                experiência ao cliente. Amante da tecnologia, busco compartilhar conhecimento onde quer que eu vá, sempre com uma boa música nos fones
                de ouvido para inspirar minhas criações e motivar grandes realizações. <b>Venha conhecer um pouco mais da minha trajetória!</b></p>

            <Timeline />

            <div className={style.about__stacks}>
                <Stacks name="code" title="Desenvolvedora" description="Sou desenvolvedora fullstack, integrando back-end robusto com front-end eficiente para entregar aplicações completas e funcionais." />
                <Stacks name="palette" title="Entusiasta UX" description="Meu diferencial está no front-end, onde me especializo para criar aplicações impactantes e intuitivas para uma experiência envolvente." />
                <Stacks name="book" title="Workshops" description="Apaixonada pelo poder transformador do conhecimento, busco compartilhar minhas vivências com os demais." />
                <Stacks name="people" title="Sociedade" description="Acredito no poder da tecnologia para transformar vidas e me interesso por iniciativas que contribuam para o bem-estar social." />
            </div>

            <div>
                <p className={style.about__cta}>
                    Quer saber mais sobre minhas habilidades técnicas?
                    <br />
                    Baixe meu currículo abaixo e descubra mais:
                </p>

                <a href="/files/curriculo.pdf" download="curriculo.pdf" className={style.about__btncv}>
                    Download

                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
            </div>
        </section>
    );
}
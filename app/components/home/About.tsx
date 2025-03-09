import style from "./About.module.css"

export default function About() {
    return (
        <section className={`container ${style.about}`}>
            <h1>Sobre mim</h1>
            <p>Prazer, sou Mariana, mas pode me chamar de Mari! Sou desenvolvedora fullstack, apaixonada por transformar ideias em experiências incríveis
                para os usuários. Com o tempo, tenho aprimorado meus conhecimentos, sempre focada em entregar um código de qualidade e proporcionar a melhor
                experiência ao cliente. Amante da tecnologia, busco compartilhar conhecimento onde quer que eu vá, sempre com uma boa música nos fones
                de ouvido para inspirar minhas criações e motivar grandes realizações. <b>Venha conhecer um pouco mais da minha trajetória!</b></p>
        </section>
    );
}
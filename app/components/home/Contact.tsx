import style from './Contact.module.css'

export default function Contact() {
    return (
        <section className={`container ${style.contact}`}>
            <h1>Contato</h1>
            <p>Se minhas habilidades técnicas e sociais chamaram sua atenção e você está pronto para criar soluções inovadoras,
                entre em <br/> contato comigo ou conecte-se pelas minhas redes sociais abaixo.
                <b>Vamos transformar ideias em realidade!</b></p>
                <a>Entrar em Contato</a>
        </section>
    );
}
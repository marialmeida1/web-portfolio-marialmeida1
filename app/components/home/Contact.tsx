// Styles
import style from './Contact.module.css'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <section className={`container ${style.contact}`}>
            <div>
                <h1>Contato</h1>
                <p>Se minhas habilidades técnicas e sociais chamaram sua atenção e você está pronto para criar soluções inovadoras,
                    entre em <br /> contato comigo ou conecte-se pelas minhas redes sociais abaixo. <br />
                    <b>Vamos transformar ideias em realidade!</b></p>
            </div>
            <a className={style.contact__btn}>Entrar em Contato <FontAwesomeIcon icon={faWhatsapp} /></a>
        </section>
    );
}
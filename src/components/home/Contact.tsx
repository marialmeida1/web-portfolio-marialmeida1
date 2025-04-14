// Styles
import style from './Contact.module.css'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Types
import { ContactContent } from '@/src/types/ContactContent'

interface ContactProps {
    content: ContactContent
}

export default function Contact({content}: ContactProps) {
    return (
        <section className={`container ${style.contact}`}>
            <div>
                <h1>{content.title}</h1>
                <p>{content.description}
                    <b>{content.cta}</b></p>
            </div>
            <a href={`https://wa.me/5537988023839?text=${content.number_message}`}
                target="_blank"
                rel="noopener noreferrer" className={style.contact__btn}>{content.btn_cta} <FontAwesomeIcon icon={faWhatsapp} /></a>
        </section>
    );
}
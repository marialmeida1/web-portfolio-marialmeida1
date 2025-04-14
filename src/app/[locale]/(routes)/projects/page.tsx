// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faFlutter, faPhp, faDartLang, faGit, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Styles 
import style from './page.module.css'

export default function Projects() {
    return (
        <>
            <section className={style.projects__banner}></section>

            <section className={`container ${style.projects__title}`}>
                <div>
                    <h1>Girls in Ctrl</h1>
                    <div className={style.projects__title_img}></div>
                </div>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique deserunt exercitationem perspiciatis laudantium eum veniam
                    consequuntur tenetur culpa doloribus excepturi, nesciunt consequatur, necessitatibus natus consectetur accusamus, nihil ducimus
                    fugiat esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti reiciendis illo voluptate magni laborum
                    perferendis similique, porro sed est neque voluptatibus eligendi aliquam pariatur. Sit blanditiis consectetur minima iste?</p>
            </section>

            <section className={`container ${style.projects__tools}`}>
                <div className={style.projects__tools_infos}>
                    <h2>Linguagens e Ferramentas</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faLaravel} /></li>
                        <li><FontAwesomeIcon icon={faFlutter} /></li>
                        <li><FontAwesomeIcon icon={faPhp} /></li>
                        <li><FontAwesomeIcon icon={faDartLang} /></li>
                        <li><FontAwesomeIcon icon={faGit} /></li>
                    </ul>
                </div>

                <a href="">Código Fonte<FontAwesomeIcon icon={faGithub} /></a>
            </section>


            <section className={`container ${style.projects__learned}`}>
                <h2>O que aprendi</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique deserunt exercitationem perspiciatis laudantium eum veniam
                    consequuntur tenetur culpa doloribus excepturi, nesciunt consequatur, necessitatibus natus consectetur accusamus, nihil ducimus
                    fugiat esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti reiciendis illo voluptate magni laborum
                    perferendis similique, porro sed est neque voluptatibus eligendi aliquam pariatur. Sit blanditiis consectetur minima iste?</p>
            </section>

            <section className={`container ${style.projects__images}`}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>

            <section className={style.projects__contact}>
                <img className={style.projects__contact__img} src="/img/banner/bg_web.png" alt="" />

                <div className={style.projects__contact_infos}>
                    <div>
                        <h1>Contato</h1>
                        <p>Se minhas habilidades técnicas e sociais chamaram sua atenção e você está pronto para criar soluções inovadoras,
                            entre em contato comigo ou conecte-se pelas minhas redes sociais abaixo. <br />
                            <b>Vamos transformar ideias em realidade!</b></p>
                    </div>
                    <a href="https://wa.me/5537988023839?text=SUA%20MENSAGEM"
                        target="_blank"
                        rel="noopener noreferrer">Entrar em Contato <FontAwesomeIcon icon={faWhatsapp} /></a>
                </div>
            </section>
        </>
    );
}
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faFlutter, faPhp, faDartLang, faGit, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Styles 
import style from './page.module.css'

// Language
import { genereteProjectsPageContent } from '@/src/utils/GenereteProjectsPageContent';

export default function Projects() {

    // Page
    const projectsPageContent = genereteProjectsPageContent();

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
                    <h2>{projectsPageContent.title_tools}</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faLaravel} /></li>
                        <li><FontAwesomeIcon icon={faFlutter} /></li>
                        <li><FontAwesomeIcon icon={faPhp} /></li>
                        <li><FontAwesomeIcon icon={faDartLang} /></li>
                        <li><FontAwesomeIcon icon={faGit} /></li>
                    </ul>
                </div>

                <a href="">{projectsPageContent.link_project}<FontAwesomeIcon icon={faGithub} /></a>
            </section>


            <section className={`container ${style.projects__learned}`}>
                <h2>{projectsPageContent.title_learned}</h2>
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
                        <h1>{projectsPageContent.title_contact}</h1>
                        <p>{projectsPageContent.description_contact}</p>
                    </div>
                    <a href={`https://wa.me/5537988023839?text=${projectsPageContent.number_message}`}
                        target="_blank"
                        rel="noopener noreferrer">{projectsPageContent.cta_contact}<FontAwesomeIcon icon={faWhatsapp} /></a>
                </div>
            </section>
        </>
    );
}
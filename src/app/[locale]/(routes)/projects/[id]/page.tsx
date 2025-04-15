// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconsMap } from "@/src/lib/fontawesome-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Styles 
import style from './page.module.css'

// Language
import { genereteProjectsPageContent } from '@/src/utils/GenereteProjectsPageContent';
import { generateProjectsInfosContent } from '@/src/utils/GenerateProjectsInfosContent';
import Gallery from '@/src/components/projects/Gallery';

interface ProjectPageProps {
    params: {
        id: number;
    };
}

export default function Projects({ params }: ProjectPageProps) {

    // Router
    const { id } = params;

    // Page
    const projectsPageContent = genereteProjectsPageContent();

    // Projects
    const projectsInfosContent = generateProjectsInfosContent();
    const project = projectsInfosContent.projects[id - 1];

    return (
        <>
            <section className={style.projects__banner}></section>

            <section className={`container ${style.projects__title}`}>
                <div>
                    <h1>{project.title}</h1>
                    <div className={style.projects__title_img}></div>
                </div>

                <p>{project.description_page}</p>
            </section>

            <section className={`container ${style.projects__tools}`}>
                <div className={style.projects__tools_infos}>
                    <h2>{projectsPageContent.title_tools}</h2>
                    <ul>
                        {project.icons.map((iconName, index) => {
                            const icon = iconsMap[iconName as keyof typeof iconsMap];
                            if (!icon) return null;
                            return <li><FontAwesomeIcon icon={icon} key={index} /></li>;
                        })}
                    </ul>
                </div>

                <a href={project.link_project} target='_blanck'>{projectsPageContent.link_project}</a>
            </section>


            <section className={`container ${style.projects__learned}`}>
                <h2>{projectsPageContent.title_learned}</h2>
                <p>{project.description_learned}</p>
            </section>

            <section className={`container ${style.projects__images}`}>
                <Gallery id={id-1} />
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
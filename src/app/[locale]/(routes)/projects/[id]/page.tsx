'use client'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconsMap } from "@/src/lib/fontawesome-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Styles 
import style from './page.module.css'

// Language
import { useGenereteProjectsPageContent } from '@/src/utils/GenereteProjectsPageContent';
import { useGenerateProjectsInfosContent } from '@/src/utils/GenerateProjectsInfosContent';
import Gallery from '@/src/components/projects/Gallery';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

// Router
import { useRouter } from 'next/navigation'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';


export default function Projects() {

    // Router
    const params = useParams();
    const id = Number(params.id);

    // Page
    const projectsPageContent = useGenereteProjectsPageContent();

    // Projects
    const projectsInfosContent = useGenerateProjectsInfosContent();
    const project = projectsInfosContent.projects[id - 1];

    // Translate
    const t = useTranslations();

    // Router
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta name="description" content={project.description_card} />
            </Head>
            <section className={style.projects__banner} style={{
                backgroundImage: `url(${project.banner_page})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}></section>

            <section className={`container ${style.projects__title}`}>
                <a className={style.projects__btnback} onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} />{t('btn_back')}</a>
                <div>
                    <h1>{project.title}</h1>
                </div>

                <p dangerouslySetInnerHTML={{ __html: project.description_page }} />
            </section>

            <section className={`container ${style.projects__tools}`}>
                <div className={style.projects__tools_infos}>
                    <h2>{projectsPageContent.title_tools}</h2>
                    <ul>
                        {project.icons.map((iconName, index) => {
                            const icon = iconsMap[iconName as keyof typeof iconsMap];
                            if (!icon) return null;
                            return <li key={index}><FontAwesomeIcon icon={icon} /></li>;
                        })}
                    </ul>
                </div>

                <a href={project.link_project} target='_blanck'>{projectsPageContent.link_project}</a>
            </section>


            <section className={`container ${style.projects__learned}`}>
                <h2>{projectsPageContent.title_learned}</h2>
                <p dangerouslySetInnerHTML={{ __html: project.description_learned }} />
            </section>

            <section className={`container ${style.projects__images}`}>
                <Gallery id={id - 1} />
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
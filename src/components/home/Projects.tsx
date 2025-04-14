// Styles
import { generateProjectsInfosContent } from "@/src/utils/GenerateProjectsInfosContent";
import style from "./Projects.module.css"

// Componentes
import CardProjects from "./projects/CardProjects";
import ToggleButton from "./projects/ToggleButton";

// Types
import { ProjectsContent } from '@/src/types/ProjectsContent'

interface ProjectsProps {
    content: ProjectsContent
}

export default function Projects({content}: ProjectsProps) {

    const projectsInfosContent = generateProjectsInfosContent();
    
    return (
        <section className={`container ${style.projects}`}>
            <div className={style.projects__header}>
                <h1>{content.title}</h1>
                <ToggleButton label1={content.toggle[0]} label2={content.toggle[1]} initialState={true} />
            </div>

            <div className={style.projects__line}>
                {projectsInfosContent.projects.map((item, index) => (
                    <CardProjects key={index} id={index+1} content={item}/>
                ))}
            </div>
        </section>
    );
}
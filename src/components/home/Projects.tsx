"use client"

// Styles
import { useGenerateProjectsInfosContent } from "@/src/utils/GenerateProjectsInfosContent";
import style from "./Projects.module.css"

// Componentes
import CardProjects from "./projects/CardProjects";
import ToggleButton from "./projects/ToggleButton";

// Types
import { ProjectsContent } from '@/src/types/ProjectsContent'

// React 
import { useState } from "react";
import { useTranslations } from "next-intl";

interface ProjectsProps {
    content: ProjectsContent;
}

export default function Projects({ content }: ProjectsProps) {
    const projectsInfosContent = useGenerateProjectsInfosContent();
    const [showDevelopment, setShowDevelopment] = useState(true);
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = projectsInfosContent.projects.filter(project =>
        showDevelopment ? project.type === "0" : project.type === "1"
    );

    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

    const t = useTranslations();

    return (
        <section className={`container ${style.projects}`}>
            <div className={style.projects__header}>
                <h1>{content.title}</h1>
                <ToggleButton
                    label1={content.toggle[0]}
                    label2={content.toggle[1]}
                    isFirstOptionActive={showDevelopment}
                    onToggle={() => {
                        setShowDevelopment(prev => !prev);
                        setShowAll(false); // reseta ao trocar a aba
                    }}
                />
            </div>

            <div className={style.projects__line}>
                {visibleProjects.map((item) => {
                    const realIndex = projectsInfosContent.projects.findIndex(p => p === item);
                    return (
                        <CardProjects key={realIndex} id={realIndex + 1} content={item} />
                    );
                })}
            </div>

            {!showAll && filteredProjects.length > 3 && (
                <div className={style.projects__button}>
                    <a className={style.btn_seemore} onClick={() => setShowAll(true)}>
                        {t('btn_seemore')}
                    </a>
                </div>
            )}
        </section>
    );
}

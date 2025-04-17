import { useTranslations } from 'next-intl';
import { CardProjectsContent } from '@/src/types/CardProjectsContent'; 

export const useGenerateProjectsInfosContent = (): { projects: CardProjectsContent[] } => {
    const t = useTranslations();

    return {
        projects: t.raw('projects').map((project: any) => ({
            type: project.type,
            banner_card: project.banner_card,
            banner_page: project.banner_page,
            color_page: project.color_page,
            title: project.title,
            description_card: project.description_card,
            description_page: project.description_page,
            icons: project.icons,
            description_learned: project.description_learned,
            link_project: project.link_project,
            images: project.images
        }))
    };
};

import { useTranslations } from 'next-intl';
import { CardProjectsContent } from '@/src/types/CardProjectsContent'; 

export const generateProjectsInfosContent = (): { projects: CardProjectsContent[] } => {
    const t = useTranslations();

    return {
        projects: t.raw('projects').map((project: any) => ({
            banner_card: project.banner_card,
            color_page: project.color_page,
            title: project.title,
            description_card: project.description_card,
            description_page: project.description_page,
            icons: project.icons,
            description_learned: project.description_learned,
        }))
    };
};

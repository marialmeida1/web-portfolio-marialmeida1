import { useTranslations } from 'next-intl';

export const useGenereteProjectsPageContent = () => {
    const t = useTranslations('project_page');

    return {
        title_tools: t('title_tools'),
        link_project: t('link_project'),
        title_learned: t('title_learned'),
        title_contact: t('title_contact'),
        description_contact: t('description_contact'),
        cta_contact: t('cta_contact'),
        number_message: t('number_message'),
    };
};
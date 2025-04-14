import { useTranslations } from 'next-intl';

export const generateProjectsContent = () => {
    const t = useTranslations('home__page.projects');

    return {
        title: t('title'),
        toggle: [
            t('toggle.0'),
            t('toggle.1')
        ],
    };
};
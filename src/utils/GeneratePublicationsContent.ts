import { useTranslations } from 'next-intl';

export const generatePublicationsContent = () => {
    const t = useTranslations('home__page.publications');

    return {
        title: t('title'),
    };
};
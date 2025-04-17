import { useTranslations } from 'next-intl';

export const useGeneratePublicationsContent = () => {
    const t = useTranslations('home__page.publications');

    return {
        title: t('title'),
    };
};
import { useTranslations } from 'next-intl';

export const generateBannerContent = () => {
    const t = useTranslations('home__page.banner');

    return {
        apresentation: t('apresentation'),
        job: t('job')
    };
};
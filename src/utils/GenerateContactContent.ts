import { useTranslations } from 'next-intl';

export const generateContactContent = () => {
    const t = useTranslations('home__page.contact');

    return {
        title: t('title'),
        description: t('description'),
        cta: t('cta'),
        number_message: t('number_message'),
        btn_cta: t('btn_cta'),
    };
};
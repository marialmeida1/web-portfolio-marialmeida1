export const generateContactContent = (t: (key: string) => string) => {
    return {
        title: t('title'),
        description: t('description'),
        cta: t('cta'),
        number_message: t('number_message'),
        btn_cta: t('btn_cta'),
    };
};
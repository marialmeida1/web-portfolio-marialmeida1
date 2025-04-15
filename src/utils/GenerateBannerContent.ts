export const generateBannerContent = (t: (key: string) => string) => {
    return {
        apresentation: t('apresentation'),
        job: t('job')
    };
};
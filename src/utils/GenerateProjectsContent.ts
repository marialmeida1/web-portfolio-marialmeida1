export const generateProjectsContent = (t: (key: string) => string) => {
    return {
        title: t('title'),
        toggle: [
            t('toggle.0'),
            t('toggle.1')
        ],
    };
};
export const generateAboutContent = (t: (key: string) => string) => {
    return {
        about: {
            title: t('title'),
            description: {
                text: t('description.text'),
                cta: t('description.cta'),
            },
            timeline: Array.from({ length: 6 }).map((_, index) => ({
                description: t(`timeline.${index}.description`),
                month: t(`timeline.${index}.month`),
                year: t(`timeline.${index}.year`),
                color: t(`timeline.${index}.color`),
            })),
            stacks: Array.from({ length: 4 }).map((_, index) => ({
                name: t(`stacks.${index}.name`),
                title: t(`stacks.${index}.title`),
                description: t(`stacks.${index}.description`),
            })),
            cta: {
                text: t('cta.text'),
                cta: t('cta.cta'),
            },
        },
    }
}

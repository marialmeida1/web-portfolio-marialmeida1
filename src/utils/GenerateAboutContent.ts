import { useTranslations } from 'next-intl';

export const generateAboutContent = () => {
    const t = useTranslations('home__page.about');

    return {
        about: {
            title: t('title'),
            description: {
                text: t('description.text'),
                cta: t('description.cta'),
            },
            timeline: [
                {
                    description: t('timeline.0.description'),
                    month: t('timeline.0.month'),
                    year: t('timeline.0.year'),
                    color: t('timeline.0.color'),
                },
                {
                    description: t('timeline.1.description'),
                    month: t('timeline.1.month'),
                    year: t('timeline.1.year'),
                    color: t('timeline.1.color'),
                },
                {
                    description: t('timeline.2.description'),
                    month: t('timeline.2.month'),
                    year: t('timeline.2.year'),
                    color: t('timeline.2.color'),
                },
                {
                    description: t('timeline.3.description'),
                    month: t('timeline.3.month'),
                    year: t('timeline.3.year'),
                    color: t('timeline.3.color'),
                },
                {
                    description: t('timeline.4.description'),
                    month: t('timeline.4.month'),
                    year: t('timeline.4.year'),
                    color: t('timeline.4.color'),
                },
                {
                    description: t('timeline.5.description'),
                    month: t('timeline.5.month'),
                    year: t('timeline.5.year'),
                    color: t('timeline.5.color'),
                },
            ],
            stacks: [
                {
                    name: t('stacks.0.name'),
                    title: t('stacks.0.title'),
                    description: t('stacks.0.description'),
                },
                {
                    name: t('stacks.1.name'),
                    title: t('stacks.1.title'),
                    description: t('stacks.1.description'),
                },
                {
                    name: t('stacks.2.name'),
                    title: t('stacks.2.title'),
                    description: t('stacks.2.description'),
                },
                {
                    name: t('stacks.3.name'),
                    title: t('stacks.3.title'),
                    description: t('stacks.3.description'),
                },
            ],
            cta: {
                text: t('cta.text'),
                cta: t('cta.cta'),
            },
        },
    };
};

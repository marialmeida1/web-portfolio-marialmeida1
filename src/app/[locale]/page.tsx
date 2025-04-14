// Translate
import { useTranslations } from 'next-intl';
import { BannerContent } from '@/src/types/BannerContent';

// Components
import Banner from '@/src/components/home/Banner';
import About from '@/src/components/home/About';
import IconsLine from '@/src/components/home/IconsLine';
import Publications from '@/src/components/home/Publications';
import Contact from '@/src/components/home/Contact';
import Networks from '@/src/components/home/Networks';
import Projects from '@/src/components/home/Projects';

export default function HomePage() {
    const t = useTranslations();

    const bannerContent = {
        apresentation: t('home__page.banner.apresentation'),
        job: t('home__page.banner.job')
    };

    return (
        <>
            <Banner content={bannerContent} />
            <About />
            <IconsLine />
            <Projects />
            <Publications />
            <Contact />
            <Networks />
        </>
    );
}
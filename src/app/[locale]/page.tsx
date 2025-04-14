// Translate
import { useTranslations } from 'next-intl';
import { generateAboutContent } from '@/src/utils/GenerateAboutContent'
import { generateBannerContent } from '@/src/utils/GenerateBannerContent'


// Components
import Banner from '@/src/components/home/Banner';
import About from '@/src/components/home/About';
import IconsLine from '@/src/components/home/IconsLine';
import Publications from '@/src/components/home/Publications';
import Contact from '@/src/components/home/Contact';
import Networks from '@/src/components/home/Networks';
import Projects from '@/src/components/home/Projects';

export default function HomePage() {

    // Banner
    const bannerContent = generateBannerContent();

    // About
    const aboutContent = generateAboutContent();

    return (
        <>
            <Banner content={bannerContent} />
            <About content={aboutContent} />
            <IconsLine />
            <Projects />
            <Publications />
            <Contact />
            <Networks />
        </>
    );
}
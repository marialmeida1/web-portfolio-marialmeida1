// Translate
import { useTranslations } from 'next-intl';

// Components
import Banner from '@/src/components/home/Banner';
import About from '@/src/components/home/About';
import IconsLine from '@/src/components/home/IconsLine';
import Publications from '@/src/components/home/Publications';
import Contact from '@/src/components/home/Contact';
import Networks from '@/src/components/home/Networks';
import Projects from '@/src/components/home/Projects';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <>
            {/*<div>
      <h1>{t('title')}</h1>
      <p>{t('about')}</p>
    </div>*/}
            <Banner />
            <About />
            <IconsLine />
            <Projects />
            <Publications />
            <Contact />
            <Networks />
        </>
    );
}
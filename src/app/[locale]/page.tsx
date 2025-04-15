// app/[locale]/page.tsx

import { generateAboutContent } from '@/src/utils/GenerateAboutContent'
import { generateBannerContent } from '@/src/utils/GenerateBannerContent'
import { generateProjectsContent } from '@/src/utils/GenerateProjectsContent'
import { generateContactContent } from '@/src/utils/GenerateContactContent'

import Banner from '@/src/components/home/Banner'
import About from '@/src/components/home/About'
import IconsLine from '@/src/components/home/IconsLine'
import Projects from '@/src/components/home/Projects'
import Publications from '@/src/components/home/Publications'
import Contact from '@/src/components/home/Contact'
import Networks from '@/src/components/home/Networks'
import { getTranslations } from 'next-intl/server'

export default async function HomePage() {
    const baseUrl =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://seu-site-em-producao.com' // Substitua pelo seu domínio se necessário

    const res = await fetch(`${baseUrl}/api/medium`, {
        cache: 'no-store', // Garante que é SSR a cada request
    })

    const posts = await res.json()

    const t1 = await getTranslations('home__page.banner')
    const bannerContent = generateBannerContent(t1)

    const t2 = await getTranslations('home__page.about')
    const aboutContent = generateAboutContent(t2)

    const t3 = await getTranslations('home__page.projects')
    const projectsContent = generateProjectsContent(t3)

    const t4 = await getTranslations('home__page.contact')
    const contactContent = generateContactContent(t4)

    return (
        <>
            <Banner content={bannerContent} />
            <About content={aboutContent} />
            <IconsLine />
            <Projects content={projectsContent} />
            <Publications posts={posts} />
            <Contact content={contactContent} />
            <Networks />
        </>
    )
}

// Style
import style from './Banner.module.css'

// Types
import { BannerContent } from '@/src/types/BannerContent'

interface BannerProps {
    content: BannerContent
}

export default function Banner({ content }: BannerProps) {
    return (
        <section className={style.banner}>
            <img src="/img/banner/bg_web.png" alt="Banner" className={style.banner__image} />
            <div className={style.banner__overlay}>
                <div className={style.banner__overlay_text}>
                    <p>{content.apresentation}</p>
                    <h1>{content.job}</h1>
                    <img src="/img/banner/circles.png" alt="Picture Me" className={style.banner__circles} />
                </div>

                <img src="/img/banner/picture_elements.png" alt="Picture Me" className={style.banner__picture} />

                {/* Linhas */}
                <img src="/img/banner/line_01.png" alt="Picture Me" className={style.banner__line01} />
                <img src="/img/banner/line_02.png" alt="Picture Me" className={style.banner__line02} />
            </div>
        </section>
    );
}
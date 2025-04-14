// Style
import style from './Banner.module.css'

export default function Banner() {
    return (
        <section className={style.banner}>
            <img src="/img/banner/bg_web.png" alt="Banner" className={style.banner__image} />
            <div className={style.banner__overlay}>
                <div className={style.banner__overlay_text}>
                    <p>Prazer, sou a Mariana,</p>
                    <h1>Desenvolvedora Full-Stack e Designer UX/UI</h1>
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
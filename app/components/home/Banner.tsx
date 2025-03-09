// Componentes
import Image from 'next/image'

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
                </div>
            </div>
        </section>
    );
}
// Styles
import style from "./Footer.module.css"

// Translation
import { useTranslations } from 'next-intl';


export default function Footer() {

    const t = useTranslations();

    return(
        <section className={style.footer}>{t('footer')}</section>
    );
}
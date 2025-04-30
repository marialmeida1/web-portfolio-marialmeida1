// Styles
import { faScrewdriverWrench, faDesktop, faPaintBrush, faRefresh } from '@fortawesome/free-solid-svg-icons';
import style from './Services.module.css'

// Components
import CardServices from "./services/CardServices";
import { getTranslations } from 'next-intl/server';
import { generateServicesContent } from '@/src/utils/GenerateServicesContent';

export default function  Services() {

    const t1 = getTranslations('visualIdentityService')
    const bannerContent = await generateServicesContent(t1)


    return (
        <section className={`container ${style.services}`}>
            <h1>Serviços</h1>

            <div className={style.services__line}>
                <CardServices services={t1} />
                <CardServices services={landingPageService} />
                <CardServices services={visualIdentityService} />
            </div>
        </section>
    );
}

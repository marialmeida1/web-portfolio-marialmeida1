// Styles
import style from "./CardServices.module.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardServicesProps } from "@/src/types/CardServices";

interface CardsProps {
    services: CardServicesProps;
}

export default function CardServices({ services }: CardsProps) {
    const {
        icon,
        title,
        description,
        price,
        priceLabel = "a partir",
        priceSuffix = "/mês",
        color = "#5C35A8",
        features,
        ideal,
        link = "#",
    } = services;

    return (
        <article className={style.cardservices}>
            <FontAwesomeIcon icon={icon} style={{ backgroundColor: color }} />

            <h2>{title}</h2>

            <p>{description}</p>

            <div className={style.cardservices__price}>
                <p>{priceLabel}</p>
                <h3 style={{ color: color }}>{price}</h3>
                <p>{priceSuffix}</p>
            </div>

            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            <hr />

            <p className={style.cardservices__ideal}>
                <span>Ideal:</span> {ideal}
            </p>

            <a href={link} className={style.cardservices__seemore}>
                Saber mais
            </a>
        </article>
    );
}

import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type CardServicesProps = {
    icon: IconDefinition;
    title: string;
    description: string;
    price: string;
    priceLabel?: string;
    priceSuffix?: string;
    color?: string;
    features: string[];
    ideal: string;
    link?: string;
};
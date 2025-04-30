export const generateServicesContent = (t: (key: string) => string) => {
    return {
        icon: "faRefresh",  // Mantendo o ícone original, já que ele não depende da tradução
        title: t('visualIdentityService.title'),
        description: t('visualIdentityService.description'),
        price: "R$ 1.200,00",  // Mantendo o valor fixo, pois não há tradução envolvida
        priceLabel: t('visualIdentityService.priceLabel'),
        priceSuffix: t('visualIdentityService.priceSuffix'),
        color: "#5C35A8",  // Mantendo a cor fixa
        features: [
            t('visualIdentityService.features.0'),
            t('visualIdentityService.features.1'),
            t('visualIdentityService.features.2'),
            t('visualIdentityService.features.3'),
            t('visualIdentityService.features.4')
        ],
        ideal: t('visualIdentityService.ideal'),
        link: "#"
    };
};

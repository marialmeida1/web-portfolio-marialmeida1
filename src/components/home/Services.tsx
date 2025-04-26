// Styles
import { faScrewdriverWrench, faDesktop, faPaintBrush, faRefresh } from '@fortawesome/free-solid-svg-icons';
import style from './Services.module.css'

// Components
import CardServices from "./services/CardServices";

export default function Services() {

    const maintenanceService = {
        icon: faScrewdriverWrench,
        title: "Manutenção de Sites e Landing Pages",
        description: "Tranquilidade total para seu site: atualizações, segurança e suporte contínuo!",
        price: "R$ 100,00",
        priceLabel: "a partir",
        priceSuffix: "/mês",
        color: "#5C35A8",
        features: [
            "Atualizações de conteúdo sempre que necessário",
            "Ajustes de design e responsividade",
            "Correção de bugs técnicos",
            "Realização de backups periódicos",
            "Suporte para pequenos novos recursos",
        ],
        ideal: "Pequenas empresas, profissionais autônomos e lojas locais que querem tranquilidade e segurança digital.",
        link: "#",
    };

    const landingPageService = {
        icon: faDesktop,
        title: "Criação de Landing Pages (Código ou Design)",
        description: "Transforme sua ideia em uma página de conversão incrível e otimizada!",
        price: "R$ 500,00",
        priceLabel: "a partir de",
        priceSuffix: "(valor fixo por página)",
        color: "#2A9D8F",
        features: [
            "Criação de páginas com design atrativo e funcional",
            "Implementação de formulários e call-to-actions eficazes",
            "Design responsivo para dispositivos móveis",
            "Otimização para SEO e velocidade de carregamento",
            "Configuração de integração com ferramentas de marketing (Google Analytics, Mailchimp, etc.)",
        ],
        ideal: "Empreendedores, lançamentos de produtos e campanhas promocionais que precisam de uma landing page de alta conversão.",
        link: "#",
    };

    const graphicDesignService = {
        icon: faPaintBrush,
        title: "Design Gráfico e Identidade Visual",
        description: "Sua marca, sua essência: crie uma identidade visual impactante e única!",
        price: "R$ 1.000,00",
        priceLabel: "a partir de",
        priceSuffix: "(valor fixo por projeto)",
        color: "#F4A261",
        features: [
            "Criação de logotipo único e personalizado",
            "Desenvolvimento de paleta de cores, tipografia e padrões visuais",
            "Materiais gráficos: panfletos, cartões de visita, e-books, etc.",
            "Rebranding completo: modernização de identidade visual",
            "Criação de templates para redes sociais",
        ],
        ideal: "Empresas de todos os tamanhos, startups ou qualquer marca que deseje criar ou reformular sua identidade visual.",
        link: "#",
    };

    const visualIdentityService = {
        icon: faRefresh,
        title: "Reestruturação de Identidade Visual",
        description: "Revolucione a percepção da sua marca com uma reformulação completa!",
        price: "R$ 2.500,00",
        priceLabel: "a partir de",
        priceSuffix: "(valor fixo por projeto)",
        color: "#E76F51",
        features: [
            "Criação de um novo logo e elementos visuais",
            "Redesign de site e atualização de layout",
            "Desenvolvimento de padrões para redes sociais",
            "Implementação de novas estratégias de comunicação visual",
            "Consultoria sobre posicionamento e branding",
        ],
        ideal: "Empresas que querem melhorar sua imagem no mercado ou se reposicionar para atingir um novo público.",
        link: "#",
    };

    return (
        <section className={`container ${style.services}`}>
            <h1>Serviços</h1>

            <div>
                <CardServices services={maintenanceService} />
                <CardServices services={landingPageService} />
                <CardServices services={graphicDesignService} />
                <CardServices services={visualIdentityService} />
            </div>
        </section>
    );
}

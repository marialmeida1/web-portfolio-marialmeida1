// IconsLine.tsx
import style from "./IconsLine.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faFigma, faFlutter, faReact, faBootstrap, faPhp, faHtml5, faCss3, faDartLang, faJava, faJs, faGit } from '@fortawesome/free-brands-svg-icons';

// Lista otimizada de ícones
const icons = [faLaravel, faFigma, faFlutter, faReact, faBootstrap, faPhp, faHtml5, faCss3, faDartLang, faJava, faJs, faGit];

export default function IconsLine() {
    return (
        <div className={style.iconsline}>
            <div className={style.iconsline__track}>
                {icons.concat(icons).map((icon, index) => (
                    <FontAwesomeIcon key={index} className={style.iconsline__icon} icon={icon} />
                ))}
            </div>
            <div className={style.iconsline__track}>
                {icons.concat(icons).map((icon, index) => (
                    <FontAwesomeIcon key={index} className={style.iconsline__icon} icon={icon} />
                ))}
            </div>
        </div>
    );
}

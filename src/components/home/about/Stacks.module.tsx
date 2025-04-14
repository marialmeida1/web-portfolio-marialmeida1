// Styles
import style from './Stacks.module.css'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faBook, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';

const icons = { code: faCode, palette: faPalette, book: faBook, people: faPeopleArrows };

interface Props {
    name: string;
    title: string;
    description: string
}

export default function Stacks({ name, title, description }: Props) {

    const icon = icons[name as keyof typeof icons]; 

    if (!icon) {
        console.warn(`Invalid icon name: ${name}`);
    }

    return (
        <div className={style.stacks}>
            <FontAwesomeIcon icon={icon} className={style.stacks__icon} />
            <div>
                <h2 className={style.stacks__title}>{title}</h2>
                <p className={style.stacks__description}>{description}</p>
            </div>
        </div>
    );
}

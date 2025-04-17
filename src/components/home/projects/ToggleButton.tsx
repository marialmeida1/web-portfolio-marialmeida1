import style from './ToggleButton.module.css';

interface ToggleButtonProps {
    label1: string;
    label2: string;
    isFirstOptionActive: boolean;
    onToggle: () => void;
}

export default function ToggleButton({ label1, label2, isFirstOptionActive, onToggle }: ToggleButtonProps) {
    return (
        <div className={style.togglebutton}>
            <a
                type="button"
                className={isFirstOptionActive ? style.togglebutton__active : style.togglebutton__inactive}
                onClick={() => {
                    if (!isFirstOptionActive) onToggle();
                }}
                aria-pressed={isFirstOptionActive}
            >
                {label1}
            </a>
            <a
                type="button"
                className={!isFirstOptionActive ? style.togglebutton__active : style.togglebutton__inactive}
                onClick={() => {
                    if (isFirstOptionActive) onToggle();
                }}
                aria-pressed={!isFirstOptionActive}
            >
                {label2}
            </a>
        </div>
    );
}

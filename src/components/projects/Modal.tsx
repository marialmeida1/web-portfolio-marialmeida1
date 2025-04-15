import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
    src: string;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
}

export default function Modal({
    src,
    onClose,
    onNext,
    onPrev,
    hasNext,
    hasPrev,
}: ModalProps) {
    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={onClose}>✕</button>

                {hasPrev && (
                    <button className={`${styles.nav} ${styles.left}`} onClick={onPrev}>←</button>
                )}

                <img src={src} alt="Imagem ampliada" className={styles.image} />

                {hasNext && (
                    <button className={`${styles.nav} ${styles.right}`} onClick={onNext}>→</button>
                )}
            </div>
        </div>
    );
}

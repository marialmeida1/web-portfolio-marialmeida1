'use client'

// React
import { useState } from "react";

// Componentes
import Modal from "./Modal";

// Language
import { useGenerateProjectsInfosContent } from '@/src/utils/GenerateProjectsInfosContent';

// Style
import style from "./Gallery.module.css"

interface ProjectPageProps {
    id: number;
}

export default function Gallery({ id }: ProjectPageProps) {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    // Projects
    const projectsInfosContent = useGenerateProjectsInfosContent();
    const project = projectsInfosContent.projects[id];
    const images = project.images;

    const openModal = (index: number) => setCurrentIndex(index);
    const closeModal = () => setCurrentIndex(null);
    const goPrev = () => setCurrentIndex((i) => (i !== null && i > 0 ? i - 1 : i));
    const goNext = () => setCurrentIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i));

    return (
        <>
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`Imagem ${i}`}
                    className={style.thumbnail}
                    onClick={() => openModal(i)}>
                </img>
            ))}

            {currentIndex !== null && (
                <Modal
                    key={currentIndex}
                    src={images[currentIndex]}
                    onClose={closeModal}
                    onNext={goNext}
                    onPrev={goPrev}
                    hasNext={currentIndex < images.length - 1}
                    hasPrev={currentIndex > 0}
                />
            )}
        </>
    );
}

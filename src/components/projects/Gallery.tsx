'use client'

// React
import { useState } from "react";

// Componentes
import Modal from "./Modal";

// Language
import { generateProjectsInfosContent } from '@/src/utils/GenerateProjectsInfosContent';

interface ProjectPageProps {
    id: number;
}

export default function Gallery({ id }: ProjectPageProps) {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    // Projects
    const projectsInfosContent = generateProjectsInfosContent();
    const project = projectsInfosContent.projects[id];
    const images = project.images;

    const openModal = (index: number) => setCurrentIndex(index);
    const closeModal = () => setCurrentIndex(null);
    const goPrev = () => setCurrentIndex((i) => (i !== null && i > 0 ? i - 1 : i));
    const goNext = () => setCurrentIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i));

    return (
        <div className="gallery">
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`Imagem ${i}`}
                    className="gallery-img"
                    onClick={() => openModal(i)}
                />
            ))}

            {currentIndex !== null && (
                <Modal
                    src={images[currentIndex]}
                    onClose={closeModal}
                    onNext={goNext}
                    onPrev={goPrev}
                    hasNext={currentIndex < images.length - 1}
                    hasPrev={currentIndex > 0}
                />
            )}
        </div>
    );
}

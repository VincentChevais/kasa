import { useState } from "react";

// Carousel affiche une galerie d'images avec navigation
// useState permet de stocker l'index de l'image actuellement affichée
// Les boutons précédent / suivant modifient cet index
function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = pictures.length;

    // Passe à l'image suivante (boucle à la fin)
    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % total);
    };

    // Passe à l'image précédente (boucle au début)
    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
    };

    return (
        <div className="carousel">
            {/* Image actuellement affichée */}
            <img
                src={pictures[currentIndex]}
                alt=""
                className="carousel__image"
            />

            {/* Navigation affichée uniquement s'il y a plusieurs images */}
            {total > 1 && (
                <>
                    <button
                        className="carousel__btn carousel__btn--prev"
                        onClick={prev}
                    >
                        <img
                            src="/assets/arrow.svg"
                            alt="Flèche précédente"
                            className="carousel__icon"
                        />
                    </button>
                    <button
                        className="carousel__btn carousel__btn--next"
                        onClick={next}
                    >
                        <img
                            src="/assets/arrow.svg"
                            alt="Flèche suivante"
                            className="carousel__icon"
                        />
                    </button>

                    {/* Indicateur de position (ex: 1 / 5) */}
                    <span className="carousel__counter">
                        {currentIndex + 1}/{total}
                    </span>
                </>
            )}
        </div>
    );
}

export default Carousel;
import { useState } from "react";

// Composant Carousel
// Carousel affiche une galerie d'images avec navigation
// useState permet de stocker l'index de l'image actuellement affichée
// Les boutons précédent / suivant modifient cet index
function Carousel({ pictures, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = pictures.length;

    // Passe à l'image suivante (boucle à la fin)
    const next = () => {
        setCurrentIndex((index) => (index + 1) % total);
    };

    // Passe à l'image précédente (boucle au début)
    const prev = () => {
        setCurrentIndex((index) => (index - 1 + total) % total);
    };

    return (
        <div className="carousel">
            {/* Wrapper de toutes les images pour slide */}
            {/* Gère l'animation :
                - translateX pour déplacer horizontalement
                - calcule la position en fonction de l'index actuel
                - "-" pour slider vers la gauche
                - transition en CSS pour l'effet de glissement */}
            <div
                className="carousel__track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {pictures.map((picture, index) => (
                    <div key={index} className="carousel__slide">
                        <img
                            src={picture}
                            alt={`Photo du logement ${title}`}
                            className="carousel__image"
                        />
                    </div>
                ))}
            </div>

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
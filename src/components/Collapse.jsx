import { useState } from "react";

// Composant Collapse
// Permet d'afficher une section repliable avec un titre et un contenu
// Utilise useState pour gérer l'état ouvert/fermé
// Le contenu est affiché ou masqué en fonction de cet état
// Le bouton affiche une flèche qui change de direction selon l'état
// Utilisé dans les pages Logement et About pour afficher des informations supplémentaires

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`collapse ${isOpen ? "collapse--open" : ""}`}>
            <button
                className="collapse__header"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h2 className="collapse__title">{title}</h2>
                <img
                    src="/assets/arrow.svg"
                    alt=""
                    className="collapse__icon"
                />
            </button>

            <div className="collapse__content">
                {children}
            </div>
        </div>
    );
}

export default Collapse;
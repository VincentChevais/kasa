import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Host from "../components/Host";

// Logement affiche le détail d'un logement en fonction de l'id présent dans l'URL
// useParams permet de récupérer le paramètre dynamique ":id"
// Si aucun logement ne correspond, on redirige vers la page 404
function Logement() {
    const { id } = useParams();

    // Recherche du logement correspondant à l'id dans les données
    const logement = logements.find(
        (item) => item.id.toString() === id.toString()
    );

    // Redirection si le logement n'existe pas
    if (!logement) {
        return <Navigate to="*" />;
    }

    return (
        <main className="logement">
            {/* Galerie d'images du logement */}
            <Carousel pictures={logement.pictures} />

            <section className="logement__header">
                <div>
                    <h1 className="logement__title">{logement.title}</h1>
                    <p className="logement__loc">{logement.location}</p>

                    {/* Liste des tags du logement */}
                    <div className="logement__tags">
                        {logement.tags.map((tag) => (
                            <Tag key={tag} label={tag} />
                        ))}
                    </div>
                </div>

                {/* Informations sur l'hôte et notation */}
                <div className="logement__host">
                    <Host
                        name={logement.host.name}
                        picture={logement.host.picture}
                    />
                    <Rating value={logement.rating} />
                </div>
            </section>

            {/* Sections repliables */}
            <section className="logement__collapses">
                <Collapse title="Description">
                    <p>{logement.description}</p>
                </Collapse>

                <Collapse title="Équipements">
                    <ul>
                        {logement.equipments.map((equipement) => (
                            <li key={equipement}>{equipement}</li>
                        ))}
                    </ul>
                </Collapse>
            </section>
        </main>
    );
}

export default Logement;
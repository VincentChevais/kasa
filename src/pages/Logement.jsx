import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Host from "../components/Host";

function Logement() {
    const { id } = useParams();

    const logement = logements.find(
        (item) => item.id.toString() === id.toString()
    );

    if (!logement) {
        return <Navigate to="*" />;
    }

    return (
        <main className="logement">
            <Carousel pictures={logement.pictures} />

            <section className="logement__header">
                <div>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className="logement__tags">
                        {logement.tags.map((tag) => (
                            <Tag key={tag} label={tag} />
                        ))}
                    </div>
                </div>

                <div className="logement__host">
                    <Host
                        name={logement.host.name}
                        picture={logement.host.picture}
                    />
                    <Rating value={logement.rating} />
                </div>
            </section>

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
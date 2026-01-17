import { Link } from "react-router-dom";

// Composant Card
// Représente une location sous forme de carte cliquable avec Img et Titre
// Link permet une navigation côté client sans rechargement de page
// L'URL est construite dynamiquement à partir de l'id du logement
// Redirige vers la page du logement correspondant grâce au router.
function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <article className="card__content">
        <img src={cover} alt={title} className="card__img" />
        <h2 className="card__title">{title}</h2>
      </article>
    </Link>
  );
}

export default Card;
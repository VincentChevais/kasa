import { Link } from "react-router-dom";

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
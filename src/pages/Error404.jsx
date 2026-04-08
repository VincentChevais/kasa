import { Link } from "react-router-dom";

// Page d'erreur 404
// Affichée lorsque l'URL ne correspond à aucune route définie
// Informe l'utilisateur que la page n'existe pas
// Fournit un lien pour retourner à la page d'accueil
function Error404() {
    return (
        <main className="error">
            <h1 className="error__title">404</h1>

            <p className="error__text">
                <span>Oups! La page que </span>
                <span>vous demandez n'existe pas.</span>
            </p>

            <Link to="/" className="error__link">
                Retourner sur la page d’accueil
            </Link>
        </main>
    );
}

export default Error404;
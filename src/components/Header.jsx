import { NavLink } from "react-router-dom";

// Composant Header
// Affiche le logo et la navigation principale
// Utilise NavLink pour appliquer une classe active au lien de la page courante
// Présent sur toutes les pages de l'application

function Header() {
  return (
    <header className="header">
      <img
        src="/assets/logo-kasa.svg"
        alt="Kasa"
        className="header__logo"
      />

      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
// Composant Footer
// Affiche le logo et le texte de copyright
// Présent sur toutes les pages de l'application
function Footer() {
  return (
    <footer className="footer">
      <img
        src="/assets/logo-kasa-white.svg"
        alt="Kasa"
        className="footer__logo"
      />
      <p className="footer__text">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
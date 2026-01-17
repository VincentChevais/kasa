// Composant Banner
// Affiche une bannière avec une image 
// Si title est non nul, il s'affiche en h1.
// Réutilisé sur plusieurs pages (Home, About) avec des contenus différents.
function Banner({ image, title, className }) {
  return (
    <section className={`banner ${className}`}>

      <img
        src={image}
        alt=""
        className="banner__img"
        fetchPriority="high"
      />

      {title && (
        <h1 className="banner__title">{title}</h1>
      )}
    </section>
  );
}

export default Banner;
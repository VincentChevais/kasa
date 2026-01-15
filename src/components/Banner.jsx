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
// Composant Rating
// Affiche une notation sous forme d'étoiles (remplies ou vides)
// Le nombre d'étoiles remplies est déterminé par la valeur numérique passée en props
// Utilisé dans la page Logement pour afficher la notation d'un logement
function Rating({ value }) {
    const rating = Number(value);

    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <img
                    key={star}
                    src={
                        star <= rating
                            ? "/assets/rating-red.svg"
                            : "/assets/rating-grey.svg"
                    }
                    alt=""
                    className="rating__star"
                />
            ))}
        </div>
    );
}

export default Rating;
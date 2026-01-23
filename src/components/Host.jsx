// Composant Host
// Affiche les informations de l'hôte : nom et photo
// Le nom est divisé en prénom et nom de famille pour un affichage sur deux lignes
// Utilisé dans la page Logement pour présenter l'hôte du logement
function Host({ name, picture }) {
    const [firstName, lastName] = name.split(" ");

    return (
        <div className="host">
            <p className="host__name">
                {firstName}
                <br />
                {lastName}
            </p>
            <img
                src={picture}
                alt={name}
                className="host__picture"
            />
        </div>
    );
}

export default Host;
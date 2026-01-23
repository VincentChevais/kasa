
// Composant Tag
// Représente un tag utilisé pour catégoriser un logement
// Affiche le label du tag dans un span avec une classe CSS dédiée
// Utilisé dans la page Logement pour afficher les tags associés à un logement
function Tag({ label }) {
    return <span className="tag">{label}</span>;
}

export default Tag;
import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";
import BannerImage from "../assets/banner-home.jpg";

// Page Home
// Affiche la bannière principale ainsi que la liste des logements.
// Données de la bannière statiques,
//  transmises au composant Banner via les props.
// Données de logements importées depuis un JSON local parcouru avec map,
//  transmises aux composants Card via les props.


function Home() {
  return (
    <main className="home">
      <Banner
        image={BannerImage}
        title={
          <>
            Chez vous,<span className="banner__break">partout et ailleurs</span>
          </>
        }
        className="banner--home"
      />

      <section className="home__cards">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
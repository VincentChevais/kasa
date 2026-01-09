import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";

function Home() {
  return (
    <main className="home">
      <Banner
        image="/assets/banner-home.jpg"
        title="Chez vous, partout et ailleurs"
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
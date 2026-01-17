import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import BannerImage from "../assets/banner-about.jpg";
import aboutData from "../data/about.json";

// Page About
// Utilise une bannière spécifique et plusieurs composants Collapse
// Données statiques transmises via les props aux composants Banner et Collapse

function About() {
    return (
        <main className="about">
            <div className="about__container">
                <Banner image={BannerImage}
                    className="banner--about" />

                <section className="about__collapses">
                    {aboutData.map((item) => (
                        <Collapse key={item.title} title={item.title}>
                            <p>{item.content}</p>
                        </Collapse>
                    ))}
                </section>
            </div>
        </main>
    );
}

export default About;
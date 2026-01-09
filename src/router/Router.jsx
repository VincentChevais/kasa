import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import Error404 from "../pages/Error404";

// Routes est le conteneur qui gère l'ensemble des routes de l'application
// Route permet d'associer une URL à un composant React
// Le Router affiche la page correspondant à l'URL courante
// La route "*" intercepte toutes les URLs inconnues (page 404)
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Router;
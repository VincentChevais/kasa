import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./router/Router";
import "./styles/main.scss";

// App est le composant racine de l'application
// BrowserRouter permet la gestion du routage côté client
// Header et Footer sont affichés sur toutes les pages
// Le composant Router affiche la page en fonction de l'URL
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
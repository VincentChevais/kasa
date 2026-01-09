import ReactDOM from "react-dom/client";
import App from "./App";

// On récupère l'élément HTML #root dans lequel React va s'injecter
// createRoot initialise le moteur de rendu React
// render() affiche le composant racine <App /> dans le DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
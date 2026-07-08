import "./NotFound.css";
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page non trouvée</h2>
            <p>La page que vous recherchez n'existe pas.</p>
            <Link to="/"><button>Retour a l'accueil</button></Link>
        </div>
    );
}

export default NotFound;
import {Link} from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Mini Boutique</div>
            <div>
                <Link to="/add-product">
                    <button>Ajouter un produit</button>
                </Link>
            </div>
        </nav>
    );
}

export default Header;

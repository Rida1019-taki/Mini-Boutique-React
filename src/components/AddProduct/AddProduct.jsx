import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import "./AddProduct.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup.
    string.required("Le nom est obligatoire."),

    price: yup.
    number().typeError("Le prix doit etre un nombre.")
        .string().url().required("Le price est obligatoire."),

    categorie: yup.
    string().required("Le categorie est obligatoire."),

    image: yup.
    string().required("Le image est obligatoire."),
})


function AddProduct({addProduct}){
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    function handleAddProduct(){
        const newProduct = {
            id : Date.now(),
            name : name,
            price : Number(price),
            category : category,
            image : image
        }

        addProduct(newProduct);
        navigate("/")
    }

    return(
        <div className="add-product-container">
            <Link to="/" className="back-link">&larr; Retour</Link>
            <h2>Ajouter un produit</h2>
            <div className="form-row">
                <div className="form-group">
                    <label>Nom du produit</label>
                    <input type="text" value={name} placeholder="Nom du produit" onChange={(e) =>
                        setName(e.target.value)
                    }/>
                </div>
                <div className="form-group">
                    <label>Prix (DH)</label>
                    <input type="number" value={price} placeholder="Prix" onChange={(e) =>
                        setPrice(e.target.value)
                    }/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label>Categorie</label>
                    <input type="text" value={category} placeholder="Categorie" onChange={(e) =>
                        setCategory(e.target.value)
                    }/>
                </div>
                <div className="form-group">
                    <label>Image (URL)</label>
                    <input type="text" value={image} placeholder="URL de l'image" onChange={(e) =>
                        setImage(e.target.value)
                    }/>
                </div>
            </div>
            <button onClick={handleAddProduct}>Ajouter</button>
        </div>
    );
}
export default AddProduct;
import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import "./AddProduct.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";

const schema = yup.object({
    name: yup.
    string().required("Le nom est obligatoire."),

    price: yup.
    number().typeError("Le prix doit etre un nombre.")
        .string().required("Le price est obligatoire."),

    categorie: yup.
    string().required("Le categorie est obligatoire."),

    image: yup.
    string().url("Veuillez saisir une URL valide").required("Le image est obligatoire."),
})


function AddProduct({addProduct}){

    const navigate = useNavigate();

    const {
        register,
        handleSumbit,
        reset,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    })

    function handleAddProduct(data){
        const newProduct = {
            id : Date.now(),
            ...data,
            price : Number(data.price),
        }

        addProduct(newProduct);
        reset();
        navigate("/");
    }

    return(
        <div className="add-product-container">
            <Link to="/" className="back-link">&larr; Retour</Link>
            <h2>Ajouter un produit</h2>
            <form onSubmit={handleSumbit(handleAddProduct)}>
            <div className="form-row">
                <div className="form-group">
                    <label>Nom du produit</label>
                    <input type="text" value={name}
                           placeholder="Nom du produit"
                           {...register("name")}
                    />
                    <p className="error">{errors.name?.message}</p>
                </div>
                <div className="form-group">
                    <label>Prix (DH)</label>
                    <input type="number" value={price}
                           placeholder="Prix"
                           {...register("price")}
                    />
                    <p className="error">{errors.price?.message}</p>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label>Categorie</label>
                    <input type="text" value={category}
                           placeholder="Categorie"
                           {...register("categorie")}
                    />
                    <p className="error">{errors.categorie?.message}</p>
                </div>
                <div className="form-group">
                    <label>Image (URL)</label>
                    <input type="text" value={image}
                           placeholder="URL de l'image"
                           {...register("image")}
                    />
                    <p className="error">{errors.iamge?.message}</p>
                </div>
            </div>
            <button onClick={handleAddProduct}>Ajouter</button>
            </form>
        </div>
    );
}
export default AddProduct;
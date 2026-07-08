import { useState } from "react";
import productsData from "../data/products.json";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CategoryFilter from "../components/Category/CategoryFilter";
import ProductList from "../components/ProductList/ProductList";
import Cart from "../components/Cart/Cart";
import './App.css';
import {Routes, Route} from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import AddProduct from "../components/AddProduct/AddProduct";
import {Link} from "react-router-dom";

function Home({products, setProducts, addProduct}) {
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState("Tous");

    function addToCart(product) {
        setCart([...cart, product]);
    }

    function removeFromCart(productId) {
        const newCart = [...cart];
        const index = newCart.findIndex(item => item.id === productId);
        if (index !== -1) {
            newCart.splice(index, 1);
            setCart(newCart);
        }
    }

    function deleteProduct(productId) {
        setProducts(products.filter(p => p.id !== productId));
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    }



    const filteredProducts = category === "Tous"
        ? products
        : products.filter(p => p.category === category);

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="app-container">
            <Header/>


            <div className="controls">
                <CategoryFilter category={category} setCategory={setCategory} />
            </div>

            <main className="main-layout">
                <section>
                    <div className="section-header">
                        <span className="section-title">Catalogue ({filteredProducts.length})</span>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="empty">
                            <h3>Aucun produit trouve</h3>
                            <p>Essayez de changer de categorie.</p>
                            <button className="btn-reset" onClick={() => setCategory("Tous")}>
                                Reinitialiser
                            </button>
                        </div>
                    ) : (
                        <ProductList
                            products={filteredProducts}
                            addToCart={addToCart}
                            deleteProduct={deleteProduct}
                        />
                    )}
                </section>
                <aside>
                    <Cart
                        cart={cart}
                        total={total}
                        removeFromCart={removeFromCart}
                        clearCart={() => setCart([])}
                    />
                </aside>
            </main>

            <Footer />
        </div>
    );
}


function App(){
    const [products, setProducts] = useState(productsData);

    function addProduct(product){
        setProducts(prev => [...prev, product]);
    }
    return(
        <Routes>
            <Route
                path="/"
                element={
                    <Home
                        products={products}
                        setProducts={setProducts}
                        addProduct={addProduct}
                    />
                }
            />

            <Route
                path="/add-product"
                element={<AddProduct addProduct={addProduct} />}
            />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;


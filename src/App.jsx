import { useState } from "react";
import productsData from "./data/products.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import './App.css';

function App() {
    const [products, setProducts] = useState(productsData);
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState("Tous");

    function addToCart(product) {
        setCart([...cart, product]);
    }

    function removeFromCart(productId) {
        setCart(cart.filter(item => item.id !== productId))
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
            <Header />

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

export default App;

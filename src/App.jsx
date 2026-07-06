import './App.css';
import { useState, useEffect } from "react";
import productsData from "./data/products.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import AddProductModal from "./components/AddProductModal";

function App() {
    const [products, setProducts] = useState(productsData);
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState("Tous");
    const [searchQuery, setSearchQuery] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

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

    function handleAddProduct(newProduct) {
        setProducts([newProduct, ...products]);
    }

    const filteredProducts = products.filter(p => {
        const matchesCategory = category === "Tous" || p.category === category;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="app-container">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            <div className="shop-controls">
                <CategoryFilter category={category} setCategory={setCategory} />

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Rechercher un produit..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button className="btn-clear" onClick={() => setSearchQuery("")}>
                            ✕
                        </button>
                    )}
                </div>
            </div>

            <main className="main-layout">
                <section>
                    <div className="products-header">
                        <span className="products-count">Catalogue ({filteredProducts.length})</span>
                        <button className="btn-add-product" onClick={() => setShowAddForm(true)}>
                            + Ajouter un produit
                        </button>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="empty-state">
                            <h3>Aucun produit trouvé</h3>
                            <p>Essayez de réinitialiser la recherche ou de changer de catégorie.</p>
                            <button className="btn-reset" onClick={() => { setSearchQuery(""); setCategory("Tous"); }}>
                                Réinitialiser
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

            <button className="fab" onClick={() => setShowAddForm(true)} aria-label="Ajouter un produit">
                +
            </button>

            <AddProductModal
                isOpen={showAddForm}
                onClose={() => setShowAddForm(false)}
                onAddProduct={handleAddProduct}
            />
        </div>
    );
}

export default App;

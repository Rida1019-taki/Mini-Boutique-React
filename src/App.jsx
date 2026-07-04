import './App.css';
import { useState, useEffect } from "react";
import productsData from "./data/products.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import AddProductModal from "./components/AddProductModal";
import { PlusIcon } from "./components/Icons";

function App() {
    const [products , setProducts] = useState(() => {
        const saved = localStorage.getItem('boutique_products');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                return parsed.map(savedProd => {
                    const defaultProd = productsData.find(d => d.id === savedProd.id);
                    if (defaultProd) {
                        return { ...savedProd, image: defaultProd.image, name: defaultProd.name };
                    }
                    return savedProd;
                });
            } catch (e) {
                return productsData;
            }
        }
        return productsData;
    });

    const [cart , setCart] = useState(() => {
        const saved = localStorage.getItem('boutique_cart');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                return parsed.map(item => {
                    const defaultProd = productsData.find(d => d.id === item.id);
                    if (defaultProd) {
                        return { ...item, image: defaultProd.image };
                    }
                    return item;
                });
            } catch (e) {
                return [];
            }
        }
        return [];
    });

    const [category , setCategory] = useState("Tous");
    const [searchQuery, setSearchQuery] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);
    
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved ? saved === 'dark' : false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem('boutique_products', JSON.stringify(products));
    }, [products]);

    useEffect(() => {
        localStorage.setItem('boutique_cart', JSON.stringify(cart));
    }, [cart]);

    function addToCart(product){
        setCart([...cart, product]);
    }

    function removeFormatCart(id){
        setCart(cart.filter((_, index) => {
            const firstIndex = cart.findIndex(i => i.id === id);
            return index !== firstIndex;
        }));
    }

    function deleteProducts(id){
        setProducts(products.filter(p => p.id !== id));
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    }

    function handleAddProduct(newProd) {
        setProducts([newProd, ...products]);
    }

    const filterProducts = products.filter(p => {
        const matchesCategory = category === "Tous" ? true : p.category === category;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="app-container">
            <Header 
                darkMode={darkMode} 
                setDarkMode={setDarkMode} 
            />

            <div className="shop-controls-bar">
                <CategoryFilter
                    category={category}
                    setCategory={setCategory}
                />
                
                <div className="search-bar-container">
                    <span className="search-icon">🔍</span>
                    <input 
                        type="text"
                        className="search-input"
                        placeholder="Rechercher un produit..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button 
                            className="btn-clear-search" 
                            onClick={() => setSearchQuery("")}
                            title="Effacer la recherche"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            <main className="shop-main">
                <section className="products-section">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span className="filter-heading">Catalogue ({filterProducts.length})</span>
                        <button 
                            className="btn-trigger-add"
                            onClick={() => setShowAddForm(true)}
                        >
                            <PlusIcon className="w-4 h-4" />
                            <span>Ajouter un produit</span>
                        </button>
                    </div>

                    {filterProducts.length === 0 ? (
                        <div className="empty-results-container">
                            <h3>Aucun produit trouvé</h3>
                            <p>Essayez de réinitialiser la recherche ou de changer de catégorie.</p>
                            <button 
                                className="btn-reset-filters"
                                onClick={() => {
                                    setSearchQuery("");
                                    setCategory("Tous");
                                }}
                            >
                                Réinitialiser
                            </button>
                        </div>
                    ) : (
                        <ProductList
                            product={filterProducts}
                            addToCart={addToCart}
                            deleteProduct={deleteProducts}
                        />
                    )}
                </section>

                <aside className="cart-section">
                    <Cart
                        cart={cart}
                        total={total}
                        removeFormatCard={removeFormatCart}
                        clearCart={() => setCart([])}
                    />
                </aside>
            </main>

            <Footer />

            <button
                className="floating-add-btn" 
                onClick={() => setShowAddForm(true)}
                title="Ajouter un produit"
                aria-label="Ajouter un produit"
            >
                <PlusIcon className="w-5 h-5" />
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

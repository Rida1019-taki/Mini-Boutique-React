import './App.css';
import { useState } from "react";
import productsData from "./data/products.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";



function App() {
   const [products , setProducts] = useState(productsData);

   const [cart , setCart] = useState([]);

   const [category , setCategory] = useState("Tous");

   function addToCart(product){
       setCart([...cart, product]);
   }

   function removeFormatCart(id){
       setCart(cart.filter(i => i.id !== id));
   }

   function deleteProducts(id){
       setProducts(products.filter(p => p.id !== id));
   }

   const filterProducts = category === "Tous" ? products : products.filter(p =>
        p.category === category);

   const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="app-container">
            <header className="shop-header">
                <Header />
                <CategoryFilter
                    category={category}
                    setCategory={setCategory}
                />
            </header>

            <main className="shop-main">
                <section className="products-section">
                    <ProductList
                        product={filterProducts}
                        addToCart={addToCart}
                        deleteProduct={deleteProducts}
                    />
                </section>

                <aside className="cart-section">
                    <Cart
                        cart={cart}
                        total={total}
                        removeFormatCard={removeFormatCart}
                    />
                </aside>
            </main>

            <Footer />
        </div>
    );
}
export default App;

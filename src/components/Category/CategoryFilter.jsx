import "./Categorie.css"

function CategoryFilter({ category, setCategory }) {
    const categories = ["Tous", "Informatique", "Electronique", "Maison"];

    return categories.map(cat => (
        <button
            key={cat}
            className={category === cat ? "filter-btn active" : "filter-btn"}
            onClick={() => setCategory(cat)}
        >
            {cat}
        </button>
    ));
}

export default CategoryFilter;

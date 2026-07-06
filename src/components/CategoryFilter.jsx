function CategoryFilter({ category, setCategory }) {
  const categories = ["Tous", "Informatique", "Électronique", "Maison"];

  return (
    <div className="filter-group">
      {categories.map((cat) => (
        <button
          key={cat}
          className={'filter-btn' + (category === cat ? ' active' : '')}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

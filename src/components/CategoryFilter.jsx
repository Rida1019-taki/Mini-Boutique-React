function CategoryFilter({category , setCategory}){
    return(
      <div className="filter-container">
          <label htmlFor="category-select" className="filter-label">Catégorie :</label>
          <div className="select-wrapper">
              <select
                  id="category-select"
                  className="filter-select"
                  value = {category}
                  onChange = {(e) => setCategory(e.target.value)}
              >
                  <option>Tous</option>
                  <option>Informatique</option>
                  <option>Maison</option>
              </select>
          </div>
      </div>
    );
}
export default CategoryFilter;
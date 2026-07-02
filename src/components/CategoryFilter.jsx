function CategoryFilter({category , setCategory}){
    return(
      <select
          value = {category}
          onChage = {(e) => setCategory(e.target.valute)}
      >
          <option>Tous</option>
          <option>Informatique</option>
          <option>Maison</option>
      </select>
    );
}
export default CategoryFilter;
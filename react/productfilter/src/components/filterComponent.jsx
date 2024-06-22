/* eslint-disable react/prop-types */
// FilterComponent.js

const FilterComponent = ({ searchTerm, selectedCategories, onSearchTermChange, onCategoryChange }) => {
  const categories = ['Electronics', 'Clothing', 'Books'];

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      <div>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;

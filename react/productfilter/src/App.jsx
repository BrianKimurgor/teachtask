// App.js
import React, { useState } from 'react';
import FilterComponent from './components/filterComponent';
import ProductListComponent from './components/productListComponent';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: '$1000' },
    { id: 2, name: 'Shirt', category: 'Clothing', price: '$50' },
    { id: 3, name: 'Book', category: 'Books', price: '$20' },
    // Add more products as needed
  ];

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategories.length === 0 || selectedCategories.includes(product.category))
  );

  return (
    <div>
      <FilterComponent
        searchTerm={searchTerm}
        selectedCategories={selectedCategories}
        onSearchTermChange={handleSearchTermChange}
        onCategoryChange={handleCategoryChange}
      />
      <ProductListComponent products={filteredProducts} />
    </div>
  );
};

export default App;

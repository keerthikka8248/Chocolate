import React, { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import FilterBar from '../Components/FilterSidebar';
import ProductDetail from './ProductDetail'; // 👈 Import modal

const Products = ({ products, searchQuery }) => {
  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // 👈 Modal product

  useEffect(() => {
    if (products.length) {
      extractFilterOptions(products);
      setLoading(false);
    }
  }, [products]);

  const extractFilterOptions = (products) => {
    const allCategories = products.flatMap(p => p.category.split('-'));
    const uniqueCategories = [...new Set(allCategories)];
    setFilterOptions(uniqueCategories);
  };

  const filteredProducts = selectedFilter
    ? products.filter(p => p.category.includes(selectedFilter))
    : products;

  const searchedProducts = searchQuery
    ? filteredProducts.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredProducts;

  const styles = {
    container: {
      display: 'flex',
    },
    sidebar: {
      width: '250px',
      padding: '20px',
      borderRight: '1px solid #ccc',
    },
    productList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      flex: 1,
      padding: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <FilterBar 
          filters={filterOptions} 
          selected={selectedFilter} 
          onSelect={setSelectedFilter} 
        />
      </div>

      <div style={styles.productList}>
        {loading ? (
          <div>Loading...</div>
        ) : searchedProducts.length ? (
          searchedProducts.map(product => (
            <ProductCard 
              key={product._id} 
              product={product} 
              onClick={() => setSelectedProduct(product)} 
            />
          ))
        ) : (
          <div>Product not available</div>
        )}
      </div>

      {/* Show product detail modal */}
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          closeModal={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default Products;

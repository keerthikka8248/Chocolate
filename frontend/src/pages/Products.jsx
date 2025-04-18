import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import FilterBar from '../Components/FilterSidebar'; // ✅ We'll create this

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products/getProducts')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        extractFilterOptions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const extractFilterOptions = (products) => {
    const allCategories = products.flatMap(p => p.category.split('-'));
    const uniqueCategories = [...new Set(allCategories)];
    setFilterOptions(uniqueCategories);
  };

  const filteredProducts = selectedFilter
    ? products.filter(product => product.category.includes(selectedFilter))
    : products;

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
        ) : (
          filteredProducts.map(product => (
            <Link to={`/products/${product._id}`} key={product._id}>
              <ProductCard product={product} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;

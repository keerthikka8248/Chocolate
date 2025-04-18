// Components/FilterBar.js
import React from 'react';

const FilterSidebar = ({ filters, selected, onSelect }) => {
  const styles = {
    filterItem: (active) => ({
      padding: '10px 15px',
      margin: '5px 0',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: active ? '#ffccbc' : '#fff',
      color: active ? '#d84315' : '#3e2723',
      border: '1px solid #ccc',
      fontWeight: active ? 'bold' : 'normal',
      transition: 'all 0.2s',
    }),
    clearBtn: {
      marginTop: '10px',
      background: '#ef5350',
      color: '#fff',
      border: 'none',
      padding: '8px 12px',
      borderRadius: '5px',
      cursor: 'pointer',
    }
  };

  return (
    <div>
      <h3>Filter by Category</h3>
      {filters.map((item, index) => (
        <div
          key={index}
          style={styles.filterItem(selected === item)}
          onClick={() => onSelect(item)}
        >
          {item}
        </div>
      ))}
      {selected && (
        <button style={styles.clearBtn} onClick={() => onSelect(null)}>
          Clear Filter
        </button>
      )}
    </div>
  );
};

export default FilterSidebar;

import React from 'react';

const FilterBar = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="filter-bar">
      <button
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        className={currentFilter === 'completed' ? 'active' : ''}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
      <button
        className={currentFilter === 'incomplete' ? 'active' : ''}
        onClick={() => onFilterChange('incomplete')}
      >
        Incomplete
      </button>
    </div>
  );
};

export default FilterBar;

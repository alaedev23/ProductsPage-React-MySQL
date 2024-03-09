import React from 'react';
import styles from './scss/Aside.module.scss';

const FilterType = React.memo(({ category, filtersArray, expandedFilters, toggleFilterExpansion, changeFilter }) => {
  const visibleFilters = expandedFilters[category]
    ? filtersArray
    : filtersArray.slice(0, 3);

  return (
    <article key={category}>
      <h4>{category.toUpperCase()}</h4>
      {visibleFilters.map(filter => {
        const filterValues = Object.values(filter);
        return (
          <div key={filterValues[1]}>
            <input
              type="checkbox"
              onChange={() => changeFilter(category, filter)}
            />
            <label>
              <span>{filterValues[1]}</span>
            </label>
          </div>
        );
      })}
      {filtersArray.length > 3 && (
        <button onClick={() => toggleFilterExpansion(category)} className={styles.showButton}>
          {expandedFilters[category] ? "Mostrar menos" : "Mostrar más"}
        </button>
      )}
    </article>
  );
});

export default FilterType;

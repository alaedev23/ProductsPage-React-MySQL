import React, { useState, useEffect, useContext } from 'react';
import styles from './scss/Aside.module.scss';
import FilterContext from './context/FilterContext';
import FilterType from './FilterType';

const Aside = () => {
  const [filters, setFilters] = useState({});
  const [expandedFilters, setExpandedFilters] = useState({});
  const { contextFilters, setContextFilters } = useContext(FilterContext);

  useEffect(() => {
    fetchFilters();
  }, []);

  const fetchFilters = async () => {
    try {
      const response = await fetch("http://localhost:9080/filters.php");
      const data = await response.json();
      setFilters(data);
      const initialExpandedState = Object.fromEntries(
        Object.keys(data).map(category => [category, false])
      );

      setExpandedFilters(initialExpandedState);
      setContextFilters({});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleFilterExpansion = (category) => {
    setExpandedFilters((prevExpandedFilters) => {
      const newExpandedFilters = {
        ...prevExpandedFilters,
        [category]: !prevExpandedFilters[category],
      };
      return newExpandedFilters;
    });
  };

  const changeFilter = (category, filter) => {
    setContextFilters((prevContextFilters) => {
      const updatedContextFilters = { ...prevContextFilters };

      if (!updatedContextFilters[category]) {
        updatedContextFilters[category] = [];
      }

      const filterIndex = updatedContextFilters[category].findIndex(
        (f) =>
          f === filter.nom ||
          f === filter.capacitat ||
          f === filter.descripcio ||
          f === filter.polzades ||
          f === filter.model
      );

      if (filterIndex !== -1) {
        updatedContextFilters[category].splice(filterIndex, 1);
      } else {
        updatedContextFilters[category].push(
          filter.nom || filter.capacitat || filter.descripcio || filter.polzades || filter.model
        );
      }

      if (updatedContextFilters[category].length === 0) {
        delete updatedContextFilters[category];
      }

      Object.keys(updatedContextFilters).forEach((key) => {
        if (updatedContextFilters[key].length === 0) {
          delete updatedContextFilters[key];
        }
      });

      return updatedContextFilters;
    });
  };

  return (
    <aside className={styles.leftAside}>
      {Object.entries(filters).map(([category, filtersArray]) => (
        <FilterType
          key={category}
          category={category}
          filtersArray={filtersArray}
          expandedFilters={expandedFilters}
          toggleFilterExpansion={toggleFilterExpansion}
          changeFilter={changeFilter}
        />
      ))}
    </aside>
  );
};

export default Aside;

import { createContext, useContext, useReducer } from 'react';
import { filterReducer } from './filterReducer';

const FilterContext = createContext();

const initialFilters = {
  sortByPrice: null,
  filterByCategory: null,
  filterBySize: null,
  filterByPrice: null,
  filterByRating: null,
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialFilters);
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };

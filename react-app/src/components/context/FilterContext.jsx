import { createContext, useState, useEffect } from "react";

const FilterContext = createContext(null);

const FilterProvider = ({children}) => {
    const [contextFilters, setContextFilters] = useState([]);

    // useEffect(() => {
    //     {console.log(contextFilters)}
    //   }, [contextFilters]);

    return (
        <FilterContext.Provider value={{contextFilters, setContextFilters}}>
            {children}
        </FilterContext.Provider>
    )
}

export {FilterProvider}
export default FilterContext;

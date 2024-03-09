import { createContext, useEffect, useState } from "react";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const obtenerCarretoDesdeLocalStorage = () => {
    const carretoGuardado = localStorage.getItem('carreto');
    return carretoGuardado ? JSON.parse(carretoGuardado) : [];
  };

  const [carreto, setCarreto] = useState(obtenerCarretoDesdeLocalStorage);

  useEffect(() => {
    localStorage.setItem('carreto', JSON.stringify(carreto));
  }, [carreto]);

  const value = {
    carreto,
    setCarreto};

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
export default ProductContext;

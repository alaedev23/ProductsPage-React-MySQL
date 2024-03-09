import React, { useState, useEffect, useContext } from 'react';
import styles from './scss/Content.module.scss';
import ProductContext from './context/ProductContext';
import FilterContext from './context/FilterContext';
import Product from './Product';

function Content() {
  const [products, setProducts] = useState([]);
  const { carreto, setCarreto } = useContext(ProductContext);
  const { contextFilters } = useContext(FilterContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9080/p3.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contextFilters),
        });

        if (!response.ok) {
          throw new Error("Hubo un problema con la petición Fetch.");
        }

        const data = await response.json();
        setProducts(data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [contextFilters]);

  function handleClick(e) {
    if (e.target.tagName.toLowerCase() !== 'button') {
      return;
    }

    const pid = e.target.id;
    const isInCart = carreto.find((item) => item.pid === pid);

    if (isInCart) {
      console.log('Producto ya está en el carrito!');
    } else {
      const productSelected = products.find((item) => item.pid === pid);
      setCarreto([...carreto, productSelected]);
    }
  }

  return (
    <section id="Content" className={styles.content}>
      <h1>UF3. Pràctica 3</h1>
      <div id="productContent" className={styles.productContent} onClick={handleClick}>
        {products.map((product) => (
          <Product key={product.pid} product={product}></Product>
        ))}
      </div>
    </section>
  );
}

export default Content;

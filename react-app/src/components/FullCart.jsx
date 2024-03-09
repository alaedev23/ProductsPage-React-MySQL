import React, { useContext, useMemo, useCallback } from 'react';
import styles from './scss/FullCart.module.scss';
import ProductContext from './context/ProductContext';
import Button from './Button';
import CarretoProduct from './CarretoProduct';

function FullCart(props) {
  const { carreto, setCarreto } = useContext(ProductContext);

  const calcularTotal = useMemo(() => {
    const total = carreto.reduce((acc, producto) => acc + (producto.preu * (producto.cantidad || 1)), 0);
    return total.toFixed(2);
  }, [carreto]);

  const toggleCarretoModalCallback = useCallback(() => {
    props.toggleCarretoModal();
  }, [props.toggleCarretoModal]);

  const emptyCarretoModalCallback = useCallback(() => {
    props.emptyCarretoModal();
  }, [props.emptyCarretoModal]);

  const handleEvent = (e) => {
    if (e.target.tagName.toLowerCase() === 'input' && e.target.type === 'number') {
      const pid = e.target.id;
      const newCantidad = e.target.value;
      handleCantidadChange(pid, newCantidad);
    }
  };

  const handleCantidadChange = useCallback(
    (pid, newCantidad) => {
      if (!isNaN(newCantidad) && newCantidad >= 0) {
        const nuevoCarreto = newCantidad === '0'
          ? carreto.filter((producto) => String(producto.pid) !== String(pid))
          : carreto.map((producto) => (
            String(producto.pid) === String(pid)
              ? { ...producto, cantidad: newCantidad }
              : producto
          ));

        setCarreto(nuevoCarreto);
      } else {
        const nuevoCarreto = carreto.filter((producto) => String(producto.pid) !== String(pid));
        setCarreto(nuevoCarreto);
      }
    },
    [carreto, setCarreto]
  );

  return (
    <section id="FullCart" className={styles.FullCart}>
      <table>
        <thead>
          <tr>
            <th>Ref.</th>
            <th>Imatge</th>
            <th>Descripció</th>
            <th>Quantitat</th>
            <th>Preu</th>
            <th>Import</th>
          </tr>
        </thead>
        <tbody onChange={handleEvent}>
          {carreto.map((carretoProduct) => (
            <CarretoProduct
              key={carretoProduct.pid}
              carretoProduct={carretoProduct}
              importeProd={(carretoProduct.preu * (carretoProduct.cantidad || 1)).toFixed(2)}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">
              <Button id="seguirComprant" actionText={"Seguir Comprant"} action={toggleCarretoModalCallback} />
            </td>
            <td colSpan="3">
              <Button id="buidarCarreto" actionText={"Buidar Carreto"} action={emptyCarretoModalCallback} />
            </td>
            <td><span>Total: {calcularTotal}</span></td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}

export default FullCart;

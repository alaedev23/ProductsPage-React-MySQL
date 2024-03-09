import React, { memo, useContext, useMemo } from 'react';
import ProductContext from './context/ProductContext';

const CarretoProduct = memo(function CarretoProduct({ carretoProduct, importeProd }) {
  console.log("pid", carretoProduct.pid)

  return (
    <tr>
      <td>{carretoProduct.pid}</td>
      <td><img src={`pccomp/${carretoProduct.imatge}`} alt={carretoProduct.model} /></td>
      <td>{`${carretoProduct.processador}/${carretoProduct.ram}/${carretoProduct.emmagatzematge}/${carretoProduct.polzades}"`}</td>
      <td><input id={carretoProduct.pid} type="number" min="0" defaultValue={carretoProduct.cantidad || 1} name="quantitat" /></td>
      <td>{carretoProduct.preu}</td>
      <td>{importeProd}</td>
    </tr>
  );
});

export default CarretoProduct;

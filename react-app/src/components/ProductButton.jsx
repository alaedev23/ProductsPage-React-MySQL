import React, { memo } from 'react';
import styles from './scss/ProductButton.module.scss';

const ProductButton = memo(function ProductButton(props) {
  return (
    <button className={styles.btn} id={props.id}>
      {props.action}
    </button>
  );
});

export default ProductButton;

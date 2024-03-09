import React, { memo } from 'react';
import styles from './scss/Button.module.scss';

const Button = memo(function Button(props) {
  return (
    <button className={styles.actionBtn} id={props.id} onClick={props.action}>
      {props.actionText}
    </button>
  );
});

export default Button;

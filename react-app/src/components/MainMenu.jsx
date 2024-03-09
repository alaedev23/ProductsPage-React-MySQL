import { useContext, useState } from 'react'
import styles from './scss/MainMenu.module.scss'
import CartButton from './CartButton';
import ProductContext from './context/ProductContext';

function MainMenu() {

  const { carreto, setCarreto } = useContext(ProductContext);

  return (
    <div id="MainMenu" className={styles.mainMenu}>
      <nav>
        <ul>
          <li>HOME</li>
          <li>NOSALTRES</li>
          <li>PRODUCTES</li>
          <li>PRACTICA 4</li>
          <li>CONTACTE</li>
        </ul>
      </nav>
      {carreto.length > 0 && <CartButton/> }
    </div>
  )
}

export default MainMenu

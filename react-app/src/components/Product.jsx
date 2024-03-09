import { memo } from 'react';
import styles from './scss/Product.module.scss'
import ProductButton from './ProductButton';

const Product = memo(function Product({ product }) {

    return (
        <article className={styles.product} key={product.pid}>
            <div className={styles.title}>
                <h2>{product.marca}</h2>
                <h3>{product.model}</h3>
            </div>
            <img src={`pccomp/${product.imatge}`} alt={product.model} />
            <h4>{`${product.processador}/${product.ram}/${product.emmagatzematge}/${product.polzades}"`}</h4>
            <div className={styles.details}><span>Veure detalls</span></div>
            <p>Preu: {`${product.preu}€`}</p>
            <ProductButton id={product.pid} action={"Comprar"}/>
        </article>
    );
})

export default Product

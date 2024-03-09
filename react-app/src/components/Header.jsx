import styles from './scss/Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      {/*<img src="../assets/SoftGPL.png" alt="SoftGPL Logo" />*/}
      <h1>Soft<span>GPL</span></h1>
      <nav>
        <ul>
          <li>Blog</li>
          <li>Forum</li>
          <li>Clients</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

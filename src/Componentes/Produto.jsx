import React from 'react'
import styles from "./Produto.module.css"

const Produto = () => {
  console.log(styles)
  return (
    <div>
      <h1 className={styles.titulo}>Notbook</h1>
      <p>1200$</p>
      <button>comprar</button>
    </div>
  )
}

export default Produto

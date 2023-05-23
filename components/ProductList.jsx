import ProductCard from "./ProductCard"
import styles from '../styles/ProductList.module.css'

const ProductList = ({productList}) => {
  return (
    <div className={styles.container}>
     <h1>THE MOST DELICIOUS NOODLE BOWLS IN TOWN</h1>
     <p className={styles.desc}>
         Feel the taste of authentic Chinese with every bite and every slurp. Made with fresh ingredients and the best quality noodles,Big Bowl noodles are guaranteed to satiate your cravings.
     </p>
     <div className={styles.wrapper}>
         {
             productList.map((product) => (
                 <ProductCard key={product.id} product={product}/>
             ))
         }
     </div>
    </div>
  )
}

export default ProductList

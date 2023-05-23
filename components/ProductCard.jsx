import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container} key={product._id}>
      <Link href={`/product/${product._id}`} passHref>
        <a>
          <Image src={product.img} width={500} height={500} alt={product.title} />
        </a>
      </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>${product.prices[0]}</span>
      <p className={styles.desc}>{product.desc}</p>
    </div>
  );
};

export default ProductCard;

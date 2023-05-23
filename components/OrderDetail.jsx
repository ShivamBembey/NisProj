import {useState} from 'react'
import styles from '../styles/OrderDetail.module.css'


const OrderDetail = ({total,createOrder}) => {

    const [customer,setCustomer] = useState("");
    const [address,setAddress] = useState("");

    const handleOrder = () => {
      createOrder({customer,address,total,method:0});
    }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
          <h1 className={styles.title}>You will pay ${total} after delivery</h1>
          <div className={styles.item}>
              <label className={styles.label}>Name Surname</label>
              <input className={styles.input} placeholder="John Doe" type="text" onChange={(e) => setCustomer(e.target.value)}/>
          </div>
          <div className={styles.item}>
              <label className={styles.label}>Phone Number</label>
              <input  className={styles.input} placeholder="+1 234 5678" type="text" />
          </div>
          <div className={styles.item}>
              <label className={styles.label}>Address</label>
              <textarea rows={5} placeholder='MG Road,Camp-411001' type="text" onChange={(e) => setAddress(e.target.value)}/>
          </div>
          <button className={styles.button} onClick={handleOrder}>
              Order
          </button>
      </div>
    </div>
  )
}

export default OrderDetail

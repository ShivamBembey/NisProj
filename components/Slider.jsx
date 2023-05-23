import Image from 'next/image'
import { useState } from 'react'

import styles from '../styles/Slider.module.css'

const Slider = () => {
 const [index,setIndex] = useState(0);
 const images = [
     "/images/banner1.jpg",
     "/images/banner2.jpg",
     "/images/banner3.jpg",
     "/images/banner4.jpg",
 ]

 const handleSlide = (direction) => {
     if(direction==="left")
     setIndex(index !== 0?index-1:images.length-1);
     if(direction==="right")
     setIndex(index !== images.length-1?index+1:0);
 }

  return (
    <div className={styles.container}>
    <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleSlide("left")}>
    <Image src="/images/arrowl.png" alt="" layout="fill" objectFit="contain"/>
    </div>
    <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {
            images.map((img,i) => (
                <div className={styles.imgContainer} key={i}>
                    <Image src={img} alt="" layout="fill" objectFit="contain" />
                </div>
            ))
        }
    </div>
    <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleSlide("right")}>
    <Image src="/images/arrowr.png" layout="fill" alt="" objectFit="contain"/>
    </div>
    </div>
  )
}

export default Slider

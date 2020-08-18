import React from 'react';
import styles from './Footer.module.css';
import img from '../../images/github.png'
const footer = ()=>{

  return(
<div className={styles.container}>
<footer>
     <img src={img} className={styles.img} alt='github'/> 
    <a href="https://github.com/suhailnkhan/Covid-19-Tracker">GitHub Link</a></footer>
</div>

  )
  
}
export default footer
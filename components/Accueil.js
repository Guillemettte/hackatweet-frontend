import 'antd/dist/antd.css';
import styles from '../styles/Accueil.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';
import { MiddlewareArray } from '@reduxjs/toolkit';


function Accueil() {
  return (
    <div className={styles.container}>
        <div className={styles.contentleft}>
        <img src='twitter.png' className={styles.petitlogo}/>
      <span>c'est du CACA    </span>
        <button type="button" className={styles.btnlogout}>Logout</button>
        </div>

        <div className={styles.contentmilieu}>
        <span>Home</span>
        <button type="button" className={styles.btntweet}>tweet</button>
        <div id="add-section"></div>
        </div>

        <div className={styles.contentright}>
        <span>Trends</span>
        </div>
    </div>
   
    );
}


export default Accueil;

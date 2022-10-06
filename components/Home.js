import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';


function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.gauche}>
       <img src='twitter.png' className={styles.groslogo}/>
      </div>  
      <div className={styles.droite} >
        <img src='twitter.png' className={styles.petitlogo}/>
        <span>See what's</span>
        <span>happening</span>
        <span>Join Hackatweet today</span>
        <button type="button" className={styles.boutonsignup}>Sign up</button>
        <span>already have an account?</span>
        <button type="button" className={styles.boutonsignin}>Sign in</button>
        <Link href = "/accueil"> go to accueil</Link> 
      </div>
    </div>
  );
}

export default Home;

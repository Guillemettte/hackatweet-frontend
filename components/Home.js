import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';
import Signup from './Signup';
import Signin from './Signin';


function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.gauche}>
      <img src='twitter.png' className={styles.groslogo}/>
      </div>  
      <div className={styles.droite} >
        <img src='twitter.png' className={styles.petitlogo}/>
        <div className={styles.titre}>
        <div>See what's</div>
        <div>happening</div>
        </div>
        <span className={styles.join}>Join Hackatweet today</span>
        <Signup/>
        <span className={styles.already}>Already have an account?</span>
        <Signin/>
        <Link href = "/accueil"> go to accueil</Link> 
      </div>
    </div>
  );
}

export default Home;

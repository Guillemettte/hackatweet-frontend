import 'antd/dist/antd.css';
import styles from '../styles/Accueil.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';
import { MiddlewareArray } from '@reduxjs/toolkit';
import Tweet from './Tweet';
import LastTweets from './LastTweets';
import Trends from './Trends';


function Accueil() {
  return (
    <div className={styles.container}>
        <div className={styles.contentleft}>
        <Link href="/"><img src='twitter.png' className={styles.petitlogo}/></Link>
        <div className={styles.accueilbas}>
          <div className={styles.user}>
          <img src='Picto_Traffic_User.png' className={styles.picto}/>
          <div className={styles.infos}>
            <div>Firstname</div>
            <div>Username</div>
          </div>
          </div>
        <button type="button" className={styles.btnlogout}>Logout</button>
        </div>
        </div>
        <div className={styles.contentmilieu}>
        <div className={styles.contentmilieuhaut}>
        <Tweet/>
        </div>
        <div className={styles.contentmilieubas}>
        <LastTweets/>
        </div>
        </div>
        <div className={styles.contentright}>
        <Trends/>
        </div>
    
    </div>
    );
}


export default Accueil;

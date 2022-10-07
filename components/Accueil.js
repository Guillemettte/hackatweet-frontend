import 'antd/dist/antd.css';
import styles from '../styles/Accueil.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';
import { MiddlewareArray } from '@reduxjs/toolkit';
import Tweet from './Tweet';
import LastTweets from './LastTweets';
import Trends from './Trends';
import { login, logout } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';


function Accueil() {

  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logout());
    window.location.href = "/"
  }

  return (
    <div className={styles.container}>
        <div className={styles.contentleft}>
        <Link href="/"><img src='twitter.png' className={styles.petitlogo}/></Link>
        <div className={styles.accueilbas}>
          <div className={styles.user}>
          <img src='Picto_Traffic_User.png' className={styles.picto}/>
          <div className={styles.infos}>
            <div>{user.firstname}</div>
            <div>@{user.username}</div>
          </div>
          </div>
        <button type="button" onClick={() => handlelogout()} className={styles.btnlogout}>Logout</button>
        </div>
        </div>
        <div className={styles.contentmilieuhaut}>
        <Tweet/>
        </div>
        {/* <div className={styles.contentmilieubas}>
        <LastTweets/>
        </div> */}
        <div className={styles.contentright}>
        <Trends/>
        </div>
    
    </div>
    );
}


export default Accueil;

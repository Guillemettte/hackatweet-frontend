import 'antd/dist/antd.css';
import styles from '../styles/LastTweets.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';


function LastTweets() {
return (
    <div>
        <div className={styles.infos}>
        <img src='Picto_Traffic_User.png' className={styles.picto}/>
        <span className={styles.firstname}>Firstname</span>
        <span className={styles.username}>@Username</span>
        <span className={styles.time}>- X hours</span>
        </div>
        <div className={styles.tweet}>
            <div>Welcome to #hackatweet guys!</div>
            <div className={styles.actions}>
        <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} /><span>0</span>
        <FontAwesomeIcon icon={faTrash} className={styles.trashIcon} />
        </div>
        </div>
    </div>
);
}

export default LastTweets;
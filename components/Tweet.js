import 'antd/dist/antd.css';
import styles from '../styles/Tweet.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';


function Tweet() {
return (
    <div>
        <div className={styles.titre}>Home</div>
        <div className={styles.tweet}>
        <label for="tweet">What's up? </label>
        <input type="text" name="tweet" value="" className={styles.input}/></div>
        <div className={styles.tweetinfos}>
            <span>0/280</span>
            <button type="button" className={styles.btntweet}>Tweet</button>
        </div>
    </div>
);
}

export default Tweet;
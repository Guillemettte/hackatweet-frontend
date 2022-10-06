import 'antd/dist/antd.css';
import styles from '../styles/LastTweets.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {tweeter } from '../reducers/tweet';


function LastTweets() {

    const [tweetData, setTweetData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
          .then(response => response.json())
          .then(data => {
            console.log(data.data)
           setTweetData(data.data.filter((data, i) => i >= 0));
          });
      }, []);
    
      const tweets = tweetData.map(data, i)
    //   => {};
    //    return <Tweet key={i} {...data} />;
      

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
        {tweets}
        </div>
        </div>
    </div>
);
}

export default LastTweets;
import 'antd/dist/antd.css';
import styles from '../styles/Tweet.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {tweeter } from '../reducers/tweet';
import{login} from '../reducers/user';


function Tweet() {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.value.token);
    const firstname = useSelector((state) => state.user.value.firstname);
    const username = useSelector((state) => state.user.value.username);
    // const [tokensaisi, setTokensaisi] = useState('');
    // const tweet = useSelector((state) => state.tweet.value);
    const [tweetsaisi, setTweetsaisi] = useState('');

    const handleTweet = () => {
        fetch('http://localhost:3000/tweets/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tweet: tweetsaisi, token : token, firstname : firstname, username: username }),
        }).then(response => response.json())
            .then(data => {
        console.log(data)
                if (data.result) {
                    dispatch(tweeter({ tweet: tweetsaisi}));
                    setTweetsaisi('');
                    // dispatch(login({ token: token}));
                }else {
    
          console.log("marche pas")
    
        }
            });
        }  



return (
    <div>
        <div className={styles.titre}>Home</div>
        <div className={styles.tweet}>
        <label for="tweet">What's up? </label>
        <input type="text" name="tweet" maxLength="280" className={styles.input} onChange={(e) => setTweetsaisi(e.target.value)} value={tweetsaisi} /></div>
        <div className={styles.tweetinfos}>
            <span>tweetsaisi.maxLength/280</span>
            <button type="button" className={styles.btntweet} onClick={() => handleTweet()}>Tweet</button>
        </div>
    </div>
);
}

export default Tweet;
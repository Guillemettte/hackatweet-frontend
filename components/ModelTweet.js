import 'antd/dist/antd.css';
import styles from '../styles/ModelTweet.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {tweeter } from '../reducers/tweet';
import Tweet from './Tweet';

function ModelTweet(props) {

    const user = useSelector((state) => state.user.value);
    const [likeCount, setLikeCount] = useState(0);
    const token = useSelector((state) => state.user.value.token);

     // Like tweet
    const handleLikeTweet = () => {
        fetch('http://localhost:3000/tweets/liked', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: token, tweet: props.tweet}),
    }).then(response => response.json())
        .then(data => {
            // if (data.result) {
            //     // let isLiked = true;
            //     iconStyle = { 'color': '#FF0000' };

            // } 
        });
    
    };
    // let videoIconStyle = { 'cursor': 'pointer' };
    // if (watchCount > 0) {
    // videoIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
    // }

    let iconStyle = {};
	if (props.isLiked) {
		iconStyle = { 'color': '#FF0000' };
	}
    console.log(props.nblike)
    return (
        <div>
            <div className={styles.infos}>
            <img src='Picto_Traffic_User.png' className={styles.picto}/>
            <span className={styles.firstname}>{props.firstname}</span>
            <span className={styles.username}>@{props.username}</span>
            <span className={styles.time}>- X hours</span>
            </div>
            <div className={styles.tweet}>
                <div>{props.tweet}</div>
                <div className={styles.actions}>
            <FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} style={iconStyle} className={styles.heartIcon} /><span></span>
            <FontAwesomeIcon icon={faTrash} className={styles.trashIcon} />
            </div>
            </div>
        </div>
        
    );
    }
    
    export default ModelTweet;
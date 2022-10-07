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
            <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} /><span>0</span>
            <FontAwesomeIcon icon={faTrash} className={styles.trashIcon} />
           
            </div>
            </div>
        </div>
    );
    }
    
    export default ModelTweet;
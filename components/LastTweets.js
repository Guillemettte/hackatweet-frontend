import 'antd/dist/antd.css';
import styles from '../styles/LastTweets.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {tweeter } from '../reducers/tweet';
import Tweet from './Tweet';
import ModelTweet from './ModelTweet';


function LastTweets() {

    const user = useSelector((state) => state.user.value);
    const [tweetData, setTweetData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
          .then(response => response.json())
          .then(data => {
            console.log(data.data)
           setTweetData(data.data.filter((data, i) => i >= 0));
          });
      }, []);
    
      const tweetsrev = tweetData.map((data, i)=> {
        return <ModelTweet key={i} {...data} />;
      });

      const tweets=tweetsrev.reverse()
       
    // const articles = articlesData.map((data, i) => {
     
    //     return <Article key={i} {...data} isBookmarked={isBookmarked} />;
    //   });
      

return (
    <div className= {styles.tweetcontainer}>
        
        {tweets}
        
    </div>
);
}

export default LastTweets;
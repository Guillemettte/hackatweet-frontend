import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import 'antd/dist/antd.css';
import styles from '../styles/Signin.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark, faEye } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';
import React from 'react';

function Signin() {

const dispatch = useDispatch();
const user = useSelector((state) => state.user.value);
const [signInUsername, setSignInUsername] = useState('');
const [signInPassword, setSignInPassword] = useState('');

const handleConnection = () => {

    fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: signInUsername, password: signInPassword }),
    }).then(response => response.json())
        .then(data => {
            if (data.result) {
                dispatch(login({ username: signInUsername, token: data.token }));
                setSignInUsername('');
                setSignInPassword('');
                // setIsModalVisible(false)
                window.location.href = "/accueil"
                setOpen(false);
            }    setOpen(false);
        });
      
 
};
const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log (open)
  };

return (
    <div>
        <button type="button" onClick={() => handleOpen()} className={styles.boutonsignin}>Sign in</button>
        <Modal open={open}>
            <div className={styles.registerContainer}>
                <div className={styles.registerSection}>
                    <p>Sign-in</p>
                    <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                    <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                    <button id="connection" onClick={() => handleConnection()}>Connect</button>
                </div>
            </div>
        </Modal>
    </div>
    
);
}

export default Signin;
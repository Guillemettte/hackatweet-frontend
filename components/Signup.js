import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import 'antd/dist/antd.css';
import styles from '../styles/signup.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark, faEye } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';
import React from 'react';

function Signup() {

const dispatch = useDispatch();
const user = useSelector((state) => state.user.value);
  const [signUpFirstname, setSignUpFirstname] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

const handleRegister = () => {
    fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
    }).then(response => response.json())
        .then(data => {
    console.log(data)
            if (data.result) {
                dispatch(login({ firstname: signUpFirstname, username: signUpUsername, token: data.token }));
                setSignUpFirstname('');
      setSignUpUsername('');
                setSignUpPassword('');
      window.location.href = "/accueil"
      setOpen(false);
            }else {

      console.log("marche pas")
      setOpen(false);
    }
        });
};

  
  
const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log (open)
  };

return (
    <div>
        <button type="button" onClick={() => handleOpen()} className={styles.boutonsignup}>Sign up</button>
        <Modal open={open}>
            <div className={styles.registerContainer}>
                <div className={styles.registerSection}>
                    <p>Sign-up</p>
          <input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
                    <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                    <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                    <button id="connection" onClick={() => handleRegister()}>Register</button>
                </div>
            </div>
        </Modal>
    </div>
    
);
}

export default Signup;
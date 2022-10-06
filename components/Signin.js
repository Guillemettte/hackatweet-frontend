import 'antd/dist/antd.css';
import styles from '../styles/Signin.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';


function Signin() {
return (
    <div>
        <button type="button" className={styles.boutonsignin}>Sign in</button>
    </div>
);
}

export default Signin;

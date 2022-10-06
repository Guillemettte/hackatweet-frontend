import 'antd/dist/antd.css';
import styles from '../styles/Signup.module.css';
import { Popover, Button } from 'antd';
import Link from 'next/link';


function Signup() {
  return (
    <div>
        <button type="button" className={styles.boutonsignup}>Sign up</button>
    </div>
  );
}

export default Signup;

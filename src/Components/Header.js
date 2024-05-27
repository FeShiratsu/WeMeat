import { Link } from 'react-router-dom';
import styles from '../CSS/header.module.css'

function Header(){
    return(
        <header className={styles.header}>
            <Link to={"/"} className={styles.title}><p>WeMeat</p></Link>
            <ul>
                <Link to={"/login"}>Log</Link>
                <Link to={"/register"}>Register</Link>
            </ul>
        </header>
    );
}
export default Header
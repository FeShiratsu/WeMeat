import { Link } from 'react-router-dom';
import styles from '../CSS/login.module.css'
import Input from '../Components/Input';
import Button from '../Components/Button';
import { useState } from 'react';
    
async function tryLogin(user,pass) {
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            email: user,
            senha: pass
         }),
    }

    const response = await fetch('http://localhost:3000/api/getOne', requestOptions);
    const content = await response.json();
    alert(content.result)
}

function Login() {
    
    const [email, setMail] = useState("");
    const [pass, setPass] = useState("");
    return (
        <main className={styles.login}>
            <p>Login here! </p>
            <Input changeFunc={setMail} typeAss="email" nameASs={"Email"}></Input>
            <Input changeFunc={setPass} typeAss="password" nameASs={"Password"}></Input>
            <Button func={tryLogin} user={email} pass={pass} text="Login"></Button>
        </main>
    );
}

export default Login
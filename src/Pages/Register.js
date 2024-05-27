import style from '../CSS/register.module.css'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { useState } from 'react';
function Register(){

    async function tryRegister(email,pass,city,add,ref) {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                email: email,
                pass: pass,
                city: city,
                add: add,
                ref: ref
             }),
        }
    
        const response = await fetch('http://localhost:3000/api/createUser', requestOptions);
        const content = await response.json();
        alert(content.result)
    }

    const [email, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [city, setCity] = useState("");
    const [add, setAdd] = useState("");
    const [ref, setRef] = useState("");
    return(
        <main className={style.register}>
            <p>Register your account</p>
            <Input changeFunc={setMail} typeAss="email" nameASs="Email"></Input>
            <Input changeFunc={setPass} typeAss="password" nameASs="Password"></Input>
            <p>Your Address</p>
            <Input changeFunc={setCity} typeAss="" nameASs="City"></Input>
            <Input changeFunc={setAdd} typeAss="" nameASs="Address"></Input>
            <Input changeFunc={setRef} typeAss="" nameASs="Reference"></Input>
            <Button func={() => {tryRegister(email,pass,city,add,ref)}}  text="Register"></Button>
        </main>
    );
}
export default Register
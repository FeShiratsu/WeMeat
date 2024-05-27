import styles from '../CSS/input.module.css'

import React from 'react';

function Input({ typeAss, nameASs, changeFunc }) {
    return (
        <div className={styles.input}>
            <label for="input">{nameASs}</label>
            <input onChange={(value) => changeFunc(value.target.value)} name="input" type={typeAss}></input>
        </div>
    );
}
export default Input
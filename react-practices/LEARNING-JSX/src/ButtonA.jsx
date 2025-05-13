import React from 'react';
// import './ButtonA.css';
import styles from './ButtonA.module.css';

function ButtonA() {

    console.log(styles)

    return (
        // <button className="button">
        <button className={styles.button}>
            Button A
        </button>
    )
}

export default ButtonA;
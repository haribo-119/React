import React from 'react';
// import './ButtonB.css';
import styles from './ButtonB.module.css';

function ButtonB() {

    console.log(styles)

    return (
        // <button className="button">
        <button className={styles.button}>
            Button B
        </button>
    )
}
export default ButtonB;
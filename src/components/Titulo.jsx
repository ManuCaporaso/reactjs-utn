import React from 'react';
import Styles from './Titulo.module.css';


export default function titulo () {

    return (
        <div className={Styles.containerTitulo}>
            <h1 className={Styles.Titulo}>TaskList</h1>
        </div>
    )
}
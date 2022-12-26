import { Link } from 'react-router-dom'
import React from 'react'
import style from "./Btn.module.scss"

const Btn = () => {
    return (
        <Link to={'/'} className={style.box}>
            <img className={style.btn} src="../assets/images/home.png" alt="" />
        </Link>
    )
}

export default Btn
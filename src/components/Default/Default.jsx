import React from 'react'
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./Default.module.scss"

const Default = () => {

    const [start, setStart] = useState(true)

    useEffect(() => {
        if (!localStorage.getItem('start')) {
            setTimeout(() => {
                setStart(false)
                localStorage.setItem("start", "start")
            }, 3000);
        } else if (localStorage.getItem('start')) {
            setStart(false)
        }
    }, [])

    setTimeout(() => {
        localStorage.clear()
    }, 600000);

    return (
        <div>
            {start ? <div className={style.hello__box}>
                <h2>𝐁𝐢𝐬𝐦𝐢𝐥𝐥𝐚𝐡</h2>
                <p>بسم الله</p>
            </div> :

                <div className={style.bg_def}>
                    <div className={style.default_bg}>
                        <img src="./assets/images/sujud.png" alt="" />
                        <img src="./assets/images/kaaba.png" alt="" />
                    </div>
                    <div className={style.box}>
                        <Link to={'/1'}>Qur'an</Link>
                        <Link to={'/times'}>Namoz Vaqtlari</Link>
                        <Link to={'/tasbeh'}>Tasbeh</Link>
                    </div>
                    
            <div className={style.powered}>
                <h4>Created by <a href="https://t.me/JavohirAbduxalilov_Front">Javohir</a> • من صنع بيرل</h4>
            </div>
                </div>
                
            }
        </div>
    )
}

export default Default
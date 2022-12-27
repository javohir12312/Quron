import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Btn from '../Btn/Btn'
import Loading from '../Loading/Loading'
import Surahs from '../Surahs/Surahs'
import style from './Quron.module.scss'

const Quron = () => {

  const [data, setData] = useState([])
  const [load, setload] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://api.alquran.cloud/v1/surah")

        setData(res.data.data)
        setload(false)
      } catch (error) {
        console.log('xato');
      }
    }

    getData()
  }, [])

  // console.log(data);

  return (
    <div className={style.box}>
      <Btn />
      <ul className={style.list}>

        <div className={style.box2}>
          <p>English</p><p>Arabian</p>
        </div>
        {
          load ? <Loading /> : data.map((item) => {
            return (
              <Link key={item.number} to={`/${item.number}`}>
                <li key={item.number}>
                  <p>{item.number}. {item.englishName}</p>  <span>•</span>  <p>{item.name}</p>
                </li></Link>
            )
          })
        }
      </ul>
      <Surahs />
    </div>
  )
}

export default Quron
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
  const [search, setSearch] = useState('')


  const list = document.querySelector('.list')


  function Check(e) {
    if (e.target.checked) {
      list.style.left = 0
    } else {
      list.style.left = "-200%"
    }
  }


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


  return (
    <>
      <Btn />
      <div className={style.box}>

        <div>
          <label className={style.ham} htmlFor="1">
            <span></span>
            <span></span>
            <span></span>
            <input onChange={Check} type="checkbox" name="" id="1" />
          </label>
        </div>
        <ul className={`list + ${style.list}`}>

          <form onSubmit={(e) => e.preventDefault()}>
            <input onChange={(e) => setSearch(e.target.value)} className={style.inp} type="text" name="" id="" placeholder='Search...'/>
          </form>

          <div className={style.box2}>
            <p>English</p><p>Arabian</p>
          </div>
          {
            load ? <Loading /> : data.filter((item => {
              return search.toLocaleLowerCase() === '' ?  item : item.englishName.toLocaleLowerCase().includes(search)
            })).map((item) => {
              return (
                <Link onClick={Check} id='1' htmlFor="1" key={item.number} to={`/${item.number}`}>
                  <li key={item.number}>
                    <p>{item.number}. {item.englishName}</p>  <span>•</span>  <p>{item.name}</p>
                  </li></Link>
              )
            })
          }
        </ul>
        <Surahs />
      </div>
    </>
  )
}

export default Quron
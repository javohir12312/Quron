import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import style from "./Surahs.module.scss"
import auther from "../../auther/author-audio.json"
import { useDispatch, useSelector } from 'react-redux';
import { audioDomla, playAudio } from '../../slice/count';
import LinearBuffer from '../LinerLoad/LinerLoad';

const Surahs = () => {

  const { id } = useParams()


  const [ones, setOnes] = useState([])
  const [play, setPlay] = useState([])
  const [load, setload] = useState(true)
  const [lang, setLang] = useState(localStorage.getItem("language") === null ? "uz.sodik":localStorage.getItem("language"))

  // const a = "uz.sodik"
  const lang2 = localStorage.setItem("language", lang)
  const lang3 = localStorage.getItem("language")

  console.log(lang);

  const state = useSelector(state => state.Domla)

  const dispatch = useDispatch()



  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://api.alquran.cloud/v1/surah/${id}/${state}`)

        setOnes(res.data.data)
        setload(false)
      } catch (error) {
        console.log('xato');
      }
    }

    getData()
  }, [id, state])

  useEffect(() => {
    const getData2 = async () => {
      try {
        const res = await axios.get(`https://api.alquran.cloud/v1/surah/${id}/${lang3}`)

        setPlay(res.data.data.ayahs)
        setload(false)
      } catch (error) {
        console.log('xato2');
      }
    }

    getData2()
  }, [id, lang])

  useEffect(() => {
    setload(true)
  }, [id])

  function Play(e) {
    dispatch(playAudio(e.currentTarget.id))

  }

  function getDomla(e) {
    dispatch(audioDomla(e.currentTarget.id))
  }

  function languga(e){
    const a = e.currentTarget.id

    const b = document.querySelector(a)

  
  }

  console.log(lang);
  return (
    <div className={style.bigbox}>
      <div id='bar' className={style.domla}>
        {
          load ? <LinearBuffer /> : <ul>
            {
              auther.map((item) => {
                return (
                  <li key={item.value} onClick={getDomla} className={style.item} id={item.value}>
                    <img src={item.img} alt="" width={100} />
                    <p id={item.name} >
                      {item.name}
                    </p>
                  </li>
                )
              })
            }
          </ul>
        }

      </div>
      <div className='w-100 mt-5 d-flex align-items-center justify-content-between'>
        <h2 className='mx-5 my-0'>Surah-{id}</h2>
        <select onChange={(e) => setLang(e.target.value)} className={style.select}>
          <option selected={lang3=="uz.sodik" ? true :false} id='uz.sodik' value="uz.sodik">uz</option>
          <option selected={lang3=="ru.kuliev" ? true :false} id='ru.kuliev' value="ru.kuliev">ru</option>
          <option selected={lang3=="en.ahmedali" ? true :false} id='en.ahmedali' value="en.ahmedali">eng</option>
        </select>
      </div>
      <ul className={style.box}>
        {
          load ? <Loader /> : ones.ayahs.map((item, index) => {
            return (
              <li key={item.number}>
                <div className={style.page}>
                  <h3>
                    {id + ":" + item.numberInSurah}
                  </h3>
                  <p>
                    Page:{item.page}
                  </p>
                </div>
                <h2>
                  {item.text}
                </h2>
                <p>{play[index]?.text}</p>

                <div className='d-flex justify-content-between align-items-center w-25 gap-2 mx-auto'>
                  <button className={style.btn} onClick={Play} id={item.audio}>
                    <img src="./assets/images/quran.png" alt=""
                    />
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Surahs
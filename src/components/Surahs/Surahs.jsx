import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import style from "./Surahs.module.scss"
import auther from "../../auther/author-audio.json"
import { useDispatch, useSelector } from 'react-redux';
import { audioDomla, playAudio } from '../../slice/count';

const Surahs = () => {

  const { id } = useParams()


  const [ones, setOnes] = useState([])
  const [play, setPlay] = useState([])
  const [load, setload] = useState(true)

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
        const res = await axios.get(`https://api.alquran.cloud/v1/surah/${id}/uz.sodik`)

        setPlay(res.data.data.ayahs)
        setload(false)
      } catch (error) {
        console.log('xato2');
      }
    }

    getData2()
  }, [id])

  useEffect(() => {
    setload(true)
  }, [id])

  function Play(e) {
    dispatch(playAudio(e.currentTarget.id))
  }

  function getDomla(e) {
    dispatch(audioDomla(e.currentTarget.id))
  }


  return (
    <div className={style.bigbox}>
      <div id='bar' className={style.domla}>
        <ul>
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
      </div>
      <h2 className='mx-5'>Surah-{id}</h2>
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
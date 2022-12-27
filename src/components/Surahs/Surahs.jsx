import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import style from "./Surahs.module.scss"

const Surahs = () => {

  const { id } = useParams()


  const [ones, setOnes] = useState([])
  const [play, setPlay] = useState(null)
  const [load, setload] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)

        setOnes(res.data.data.ayahs)
        setload(false)
      } catch (error) {
        console.log('xato');
      }
    }

    getData()
  }, [id])

  useEffect(() => {
    setload(true)
  }, [id])


  const Play = event => {
    console.log(event.currentTarget.id);
  };

  return (
    <ul className={style.box}>
      {
        load ? <Loader /> : ones.map((item) => {
          return (
            <li key={item.number}>
              <h2>
                {item.text}</h2>
              <ReactAudioPlayer src={item.audio} controls />

              <button id={item.number} onClick={Play}>
                a
              </button>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Surahs
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Loading from '../Loading/Loading';
import style from "./Surahs.module.scss"

const Surahs = () => {

  const { id } = useParams()

  const [ones, setOnes] = useState([])
  const [load, setload] = useState(true)

  useEffect(() => {
    setload(true)
  }, [id])

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




  return (
    <ul className={style.box}>
      {
        load ? <Loader /> : ones.map((item) => {
          return (
            <li key={item.number}>
              <h2>{item.text}</h2>
              <ReactAudioPlayer src={item.audio} controls />
            </li>
          )
        })
      }
    </ul>
  )
}

export default Surahs
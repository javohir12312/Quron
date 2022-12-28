import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import style from "./Surahs.module.scss"

const Surahs = () => {

  const { id } = useParams()


  const [ones, setOnes] = useState([])
  const [play, setPlay] = useState([])
  const [load, setload] = useState(true)

  const [state, setState] = useState("ar.alafasy")

  function getName(e) {
    setState(e.target.value)
  }

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
  }, [id])

  useEffect(() => {
    const getData2 = async () => {
      try {
        const res = await axios.get(`https://api.alquran.cloud/v1/surah/${id}/uz.sodik`)

        setPlay(res.data.data)
        setload(false)
      } catch (error) {
        console.log('xato');
      }
    }

    getData2()
  }, [id])

  useEffect(() => {
    setload(true)
  }, [id])


  return (
    <div className={style.bigbox}>
      <div>
        <label className={style.ham} htmlFor="1">
          <span></span>
          <span></span>
          <span></span>
        <input type="checkbox" name="" id="1" />
        </label>
      </div>

      <h2 className='mx-5'>Surah-{id}</h2>
      <ul className={style.box}>
        {
          load ? <Loader /> : ones.ayahs.map((item) => {
            return (
              <li key={item.number}>
                <h2>
                  {item.text}
                </h2>
                <ReactAudioPlayer src={item.audio} controls />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Surahs
import { DomainOutlined } from '@mui/icons-material';
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
  const [domla, setDomla] = useState([])

  const [state, setState] = useState("ar.alafasy")


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
        const domlalar = await axios.get('https://api.alquran.cloud/v1/edition/format/audio')

        setDomla(domlalar.data.data)
        setPlay(res.data.data.ayahs)
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



  function start(e) {
    const id = e.currentTarget.id

    const mp = document.getElementById(id)


    mp.play()
    pause2()
  }

  function Pause(e) {
    const id = e.currentTarget.id

    const mp2 = document.getElementById(id).pause()
  }

  function pause2() {
    Pause()
    console.log('ish');
  }

  function getDomla(e) {
    const id = e.currentTarget.id

    setState(id)
  }

  function Bar(e) {
    const id = e.currentTarget.id

    const bar = document.getElementById(id)

    bar.style.top = "-8%" ? bar.style.top = '0%' : bar.style.top = '-8%' 
  }

  return (
    <div className={style.bigbox}>
      <div id='bar' className={style.domla}>
        <ul  onClick={Bar}>
          {
            domla.map((item) => {
              return (
                <li className={style.item} id={item.identifier}>
                  <p id={item.identifier} onClick={getDomla}>
                    {item.identifier}
                  </p>
                </li>
              )
            })
          }
        </ul>
        <button onClick={Bar} id='bar'>
          <img src="./assets/images/sidebar.png" alt="" width={50}/>
        </button>
      </div>
      <h2 className='mx-5'>Surah-{id}</h2>
      <ul className={style.box}>
        {
          load ? <Loader /> : ones.ayahs.map((item, index) => {
            return (
              <li key={item.number}>
                <h3>
                  {id + ":" + item.number}
                </h3>
                <h2>
                  {item.text}
                </h2>
                <p>{play[index]?.text}</p>
                <ReactAudioPlayer id={play[index]?.number} src={item.audio} controls />

                <div className='d-flex justify-content-between align-items-center w-25 gap-2 mx-auto'>
                  <button className={style.btn} onClick={start} id={item.number}>
                    Play
                  </button>
                  <button className={style.btn} onClick={Pause} id={item.number}>
                    Pause
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
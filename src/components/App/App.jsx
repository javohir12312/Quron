import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Play2, playAudio } from '../../slice/count';
import Default from '../Default/Default';
import Quron from '../Quron/Quron';
import Tasbeh from '../Tasbeh/Tasbeh';
import Times from '../Times/Times';
import style from "./App.module.scss"

const App = () => {

  const state = useSelector(state => state.Audio)
  const state2 = useSelector(state => state.isPlay)

  const [src, setSrc] = useState(true)


  const link = useSelector(state => state.Audio)

  function play() {
    const a = document.getElementById("audio")

    if (state2 == null) {
      console.log('a');
    } else if ( state2 == true|| link !== state ) {
      a.play()
      dispatch(playAudio(state))
    } else if (state2 == false) {
      a.pause()
    }
  }

  useEffect(() => {
    play()

    if (state == '') {
      setSrc(false)
    } else {
      setSrc(true)
      dispatch(Play2(true))
    }
  }, [state])

  const dispatch = useDispatch()

  function Ended() {
    dispatch(playAudio(''))
    dispatch(Play2(null))
  }

  return (
    <>
      <audio data-role="audio-player"
        className={style.audio}
        id="audio"
        src={state}
        onEnded={Ended}
        controls={src}
        onChange={play()}
        autoPlay>
      </audio>
      {/* <ReactAudioPlayer className={style.audio} src={state} controls autoPlay /> */}
      <Routes>
        <Route path='/' index element={<Default />} />
        <Route path='/surahs' element={<Quron />} />
        <Route path="/:id" element={<Quron />} />
        <Route path='/times' element={<Times />} />
        <Route path="/tasbeh" element={<Tasbeh />} />
      </Routes>
    </>
  )
}

export default App
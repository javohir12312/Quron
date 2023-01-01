import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Default from '../Default/Default';
import Quron from '../Quron/Quron';
import Tasbeh from '../Tasbeh/Tasbeh';
import Times from '../Times/Times';

const App = () => {

  const state = useSelector(state => state.Audio)

  return (
    <>
      <audio data-role="audio-player"
        src={state}
        autoPlay
        autoCapitalize='true'
        data-show-loop="false"
        data-show-stop="false"
        data-show-volume="false"
        data-show-info="false">
      </audio>
      {/* <ReactAudioPlayer className={style.audio} src={state} controls autoPlay /> */}
      <Routes>
        <Route path='/' index element={<Default />} />
        <Route path='/surahs' element={<Quron />} />
        <Route path="/:id" element={<Quron />} />
        <Route path='/times' element={<Times />} />
        <Route path="/tasbeh" element={<Tasbeh />}/>
      </Routes>
    </>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Default from '../Default/Default';
import Quron from '../Quron/Quron';
import Tasbeh from '../Tasbeh/Tasbeh';
import Alhamdulillah from '../Tasbehlar/Allhamdulillah/Alhamdulillah';
import Astafirulloh from '../Tasbehlar/Astafirulloh/Astafirulloh';
import Times from '../Times/Times';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' index element={<Default />} />
        <Route path='/surahs' element={<Quron />} />
        <Route path="/:id" element={<Quron />} />
        <Route path='/times' element={<Times />} />
        <Route path="/tasbeh" element={<Tasbeh />}>
          <Route path="alhamdulillah" element={<Alhamdulillah />} />
          <Route path="alhamdulillah" element={<Astafirulloh />} />
          <Route path="alhamdulillah" element={<Astafirulloh />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
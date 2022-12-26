import React from 'react'
import { Link } from 'react-router-dom'

const Tasbeh = () => {
  return (
    <div>
      <Link to={'alhamdulillah'}>
        Alhamdulillah
      </Link>
      <Link to={'/subhanalloh'}>
        Subhanalloh
      </Link>
      <Link to={'/astagfirulloh'}>
        Astagfirulloh
      </Link>
      <Link to={'/kalima'}>
        La ilaha Illallah
      </Link>

    </div>
  )
}

export default Tasbeh
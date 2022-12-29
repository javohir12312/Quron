import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../slice/count'
import style from "./Tasbeh.module.scss"

const Tasbeh = () => {

  const [counter, setCounter] = useState(0);
  const [count2, setCount] = useState(1);

  const increment = () => {
    setCounter(count => count + Number(count2));
  };


  const deccrement = () => {
    if (counter - count2 > 0) {
      setCounter(count => count - Number(count2));
    } else {
      setCounter(0)
    }
  };

  const reset = () => {
    alert("Siz hozirgina barcha tasbeehlaringizni ochirdingiz")
    setCounter(0)
  }

  function getOption(e) {
    setCount(e.target.value)
  }


  return (
    <div className={style.box}>
      <div className={style.box2}>
        <ul className='d-flex align-items-center justify-content-between list-unstyled'>
          <li>
            <select onChange={getOption}>
              <option value="1">1</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </li>

          <li>
            Edit
          </li>

          <li>
            <button onClick={() => reset()}>
              Reset
            </button>
          </li>
        </ul>

        <div className={counter == 0 ? style.content : null}>
          <h2 className={style.count}>
            {counter}
          </h2>
        </div>

        <div>
          <button onClick={() => increment()}>
            <img src="./assets/images/sidebar.png" alt="" width={50}/>
          </button>
          <button onClick={() => deccrement()}>
            <img src="./assets/images/sidebar.png" alt="" width={30}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tasbeh
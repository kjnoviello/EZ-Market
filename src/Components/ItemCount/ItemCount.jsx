import Button from 'react-bootstrap/Button';
import {  useState } from "react"

import ('../ItemCount/ItemCount.css')

const ItemCount = () => {

  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
    console.log(count);
  }

  const removeCount = ()=> {
    setCount(count -1)
    console.log(count);
  }

  return (
    <div className='divItemCount'>
      <button onClick={removeCount}>-1</button>
      <label>{count}</label>
      <button onClick={addCount}>+1</button>
      <Button onClick={addCount}>Agregar</Button>

    </div>
  )
}

export default ItemCount
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import ('../ItemCount/ItemCount.css')

const ItemCount = () => {

    // defino las variables con el estado
    const [count, setCount] = useState (0)

    //funcion restar
    const handleIncrementCount = ()=> {
        setCount( count + 1 )
        console.log("Se sumo 1 unidad al carrito");
    }

    //funcion sumar
    const handleDecrementCount = ()=> {
        setCount( count - 1)
        console.log("Se resto 1 unidad al carrito");

    }

    //funcion reset
    const handleResetCount = ()=> {
      setCount(0)
      console.log(`El carrito se vació`);
    }

    //funcion agregar al carrito
    const handleAdd = ()=> {
      console.log(`Agregando ${count} unidad/es al carrito`);
    }

  return (
    <div className='divItemCount'>
        <Button variant="secondary" onClick={handleDecrementCount}>-1</Button>
        <label>{count}</label>
        <Button variant="secondary" onClick={handleIncrementCount}>+1</Button>
        <Button variant="secondary" onClick={handleResetCount}>Vaciar</Button>
        <Button onClick={handleAdd}>Agregar</Button>
    </div>
  )
}

export default ItemCount
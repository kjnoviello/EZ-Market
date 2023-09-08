import { useState } from "react";

export const useCount = (initial, stock) => {

    // defino las variables en el estado
    const [count, setCount] = useState (initial)
  
    //funcion restar
    const handleIncrementCount = ()=> {
      if(count < stock){
        setCount( count + 1 )
        console.log("Se sumo 1 unidad al carrito");
      }
    }
  
    //funcion sumar
    const handleDecrementCount = ()=> {
        if (count > initial) {
          setCount( count - 1)
          console.log("Se resto 1 unidad al carrito");
        }
    }
  
    return {count, handleDecrementCount, handleIncrementCount}
  }
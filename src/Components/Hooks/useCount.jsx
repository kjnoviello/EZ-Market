import { useState } from "react";
import Swal from 'sweetalert2'

export const useCount = (initial, stock) => {

    // defino las variables en el estado
    const [count, setCount] = useState (initial)

    //funcion sumar
    const handleIncrementCount = ()=> {
      count < stock 
        ? setCount( count + 1 ) 
        : Swal.fire({
          icon: "error",
          text: "No hay suficiente stock!",
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
  
    //funcion restar
    const handleDecrementCount = ()=> { 
        count > initial && setCount(count -1)     
    }
  
    return {count, setCount, handleDecrementCount, handleIncrementCount}
  }


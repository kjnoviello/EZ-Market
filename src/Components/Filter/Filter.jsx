/* eslint-disable react/prop-types */
import { useState } from "react"

const Filter = ({children, products}) => {

  const [filtered, setFiltered] = useState('')
  const handleFilteredChange = (event) => {
    setFiltered(event.target.value)
  }

  return (
    <>
        {children ({filtered, handleFilteredChange, products})}
    </>
  )
}

export default Filter
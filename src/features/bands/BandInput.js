import React, { useState } from "react";
import { useDispatch } from "react-redux";

function BandInput({ onBandSubmit }) {

  const dispatch = useDispatch()

  const [name, setName] = useState("")

  function handleInputChange(event) {
    setName(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(onBandSubmit(name))
    setName("")
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">name</label>
        <input id="text" type="text" onChange={handleInputChange} value={name}/>
        <input type="submit" value="add band"/>
      </form>
    </div>
  );
} 

export default BandInput;
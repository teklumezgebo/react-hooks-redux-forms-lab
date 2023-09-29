import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState('')

  function handleChange(e) {
    setName(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    onBandSubmit(name)
    setName('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input id="name" type="text" onChange={(e) => handleChange(e)} value={name}/>
        <input type="submit"  />
      </form>
    </div>
  );
}

export default BandInput;

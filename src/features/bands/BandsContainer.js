import React from "react";
import BandInput from "./BandInput"
import { bandAdded } from "./bandsSlice"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities)
  const dispatch = useDispatch()

  function onBandSubmit(name) {
    dispatch(bandAdded(name))
  }

  return (
    <div>
      <BandInput onBandSubmit={onBandSubmit}/>
      <div>{bands.map((band, index) => <li key={index}>{band}</li>)}</div>
    </div>
  );
}

export default BandsContainer;

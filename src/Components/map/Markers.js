import React from 'react'
import { Marker } from 'react-leaflet'
import Icon from "../assets/marker.png"
import {IconLocation} from "./IconLocation"
const Markers = () => {
  return (
    <div>
      <Marker position={{lat:"51.505",lng:"-0.09"}} icon={IconLocation}/>
    </div>
  )
}

export default Markers
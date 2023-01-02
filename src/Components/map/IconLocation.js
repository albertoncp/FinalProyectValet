import React from 'react'

import L from "leaflet"

const IconLocation = L.icon({
    iconUrl: require("../../assets/marker.png"),
    iconRetinaUrl: require("../../assets/marker.png"),
    iconAnchor:null,
    shadowUrl:null,
    shadowSize:null,
    shadowAnchor:null,
    iconSize: [35,35],
    className: "icon1"
})
    
export default IconLocation
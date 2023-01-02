import React from 'react'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from 'react-date-range';
import { history } from 'react-router-dom';
import "./DatePiker.scss"
const selectionRange = {
    startDate: new Date ( 2022, 12, 12),
    endDate: new Date  ( 2022, 12, 12),
    key: "selection"
}

const  DatePicker = () => {
 
    const handleSelect = () => {}
  return (
    <div className='date'>
        <DateRangePicker  ranges={[selectionRange]}
        onChange = { handleSelect }
        />
        
        <div className='inputSection'>
       

          <button className='buttonDate'> Busca tu cochera</button>
        </div>
      
    </div>
  )
}

export default DatePicker
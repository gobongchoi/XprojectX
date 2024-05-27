import React from 'react'
import './body.css'
import Days from './Days/Days'

function Body() {
  return (
    <div>
        <div className='WeekDays'>
            <div className='Mon'>Mon</div>
            <div className='Tue'>Tue</div>
            <div className='Wed'>Wed</div>
            <div className='Thu'>Thu</div>
            <div className='Fri'>Fri</div>
            <div className='Sat'>Sat</div>
            <div className='Sun'>Sun</div>
        </div>
        <hr className='Divide' />
        <Days />
    </div>
  )
}

export default Body
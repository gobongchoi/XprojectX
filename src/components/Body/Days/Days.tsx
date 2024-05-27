import React, { useState, useEffect } from 'react'
import './days.css'

function Days() {

    const [currentDate, setCurrentDate] = useState(new Date())
    
    const getDay = () => {
        const date = new Date()
        const day = date.toLocaleString('de-DE', {weekday: 'long'})

        return day 
    }
    // gibt den Wochentag als string zurueck auf deutsch zb: 'Montag'

    const getDate = () => {
      const date = new Date()
      const dateString = date.toLocaleDateString('de-DE')

      return dateString
    }
    // gibt das heutige datum zuruek im format: 'dd.mm.yyyy' als string

    const dateInt = () => {
      const dateString = getDate();
      const dayPart = dateString.split('.')[0]; 
      // Nimmt den ersten Teil vor dem ersten Punkt
      const dateInteger = parseInt(dayPart, 10); 
      // Wandelt den String in eine Ganzzahl um dabei ist der zweite parameter das 
      //dezimalsystem
      return dateInteger;
    };
    //gibt die ersten zwei zeichen des strings als Int zurueck
    
    const mo = 1
    const di = 2
    const mi = 3
    const don = 4
    const fr = 5
    const sa = 6
    const son = 7

    const wochenTag = () => {
      const day = getDay(); // Ruft den aktuellen Wochentag ab
    
      if (day === 'Sonntag') {
        return son;
      } else if (day === 'Montag') {
        return mo;
      } else if (day === 'Dienstag') {
        return di;
      } else if (day === 'Mittwoch') {
        return mi;
      } else if (day === 'Donnerstag') {
        return don;
      } else if (day === 'Freitag') {
        return fr;
      } else if (day === 'Samstag') {
        return sa;
      } else {
        return 0
      }
    };

    const getDayMinusOne = dateInt() - 1

    const a = Math.floor(getDayMinusOne / wochenTag());

    const b = a * wochenTag()

    const c = dateInt() - b

    const firstDayOfMonth = wochenTag() - (c -1)

    const getMonthYear = (date: Date) => {
      const month = date.toLocaleString('default', { month: 'long' })
      return month
    };

    const whatMonth = () => {
      const month  = getMonthYear(currentDate);

      const geradeMonat = () => {
        if ( month === 'April' ){

        }
      }

    }

    const totalBoxes = 5 * 7
    const days = Array.from({ length: totalBoxes}, (_, i) => (i % 31) + 1) /* (_, i) mapping funktion, erste parameter '_' wird ignoriert, 'i zweiter parameter stellt index dar */


  return (
    <div>
      <div className='Days'>
        {days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
    </div>
  )
}

export default Days
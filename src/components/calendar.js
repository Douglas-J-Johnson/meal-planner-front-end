import React from 'react'
import Day from './day'

export default function Calendar({days}) {
    return (
        <div className="calendar">
            {days.map((day, index) => <Day key={index} day={day}/>)}
        </div>
    )
}

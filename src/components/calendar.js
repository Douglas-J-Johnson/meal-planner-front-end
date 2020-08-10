import React from 'react'
import Day from './day'

export default function Calendar({days, addMealItem}) {
    return (
        <div className="calendar">
            {days.map((day, index) => < Day key={index} day={day} addMealItem={addMealItem} />)}
        </div>
    )
}

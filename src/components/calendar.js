import React from 'react'
import Day from './day'

export default function Calendar({days, addMealItem, editMealItem}) {
    return (
        <div className="calendar">
            {days.map((day, index) =>
                < Day
                    key={index}
                    dayIndex={index}
                    day={day}
                    addMealItem={addMealItem}
                    editMealItem={editMealItem}
                />
            )}
        </div>
    )
}

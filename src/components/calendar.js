import React from 'react'
import Day from './day'

export default function Calendar({days}) {
    console.log("days", days)

    const addDays = () => {
        console.log(days)

        return (
            <div>
                <h2>Calendar</h2>
                <Day day={days[0]}/>
            </div>
        )
    }

    return (
        <div>
            {addDays()}
        </div>
    )
}

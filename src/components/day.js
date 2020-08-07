import React from 'react'
import FoodItem from './foodItem'

export default function Day({day}) {
    console.log('day', day)

    return (
        <div>
            <h2>Day</h2>
            <FoodItem foodItem={day.meals.breakfast[0]}/>
        </div>
    )
}

import React from 'react'
import Meal from './meal'

export default function Day({day}) {
    return (
        <div className="day">
            {day.name}
            < Meal meal="Breakfast" mealItems={day.breakfastItems} />
            <hr></hr>
            < Meal meal="Lunch" mealItems={day.lunchItems} />
            <hr></hr>
            < Meal meal="Dinner" mealItems={day.dinnerItems} />
            <hr></hr>
            < Meal meal="Snacks" mealItems={day.snackItems} />
        </div>
    )
}

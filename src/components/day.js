import React from 'react'
import Meal from './meal'

export default function Day({day}) {
    return (
        <div className="day">
            {day.name}
            <hr></hr>
            < Meal meal="Breakfast" mealItems={day.breakfastItems} />
            < Meal meal="Lunch" mealItems={day.lunchItems} />
            < Meal meal="Dinner" mealItems={day.dinnerItems} />
            <hr></hr>
            < Meal meal="Snacks" mealItems={day.snackItems} />
        </div>
    )
}

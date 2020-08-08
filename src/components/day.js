import React from 'react'
import Meal from './meal'

export default function Day({day}) {
    return (
        <div className="day">
            {day.name}
            <Meal meal="Breakfast" mealItems={day.breakfastItems}/>
            <Meal meal="Lunch" mealItems={day.lunchItems}/>
            <Meal meal="Dinner" mealItems={day.dinnerItems}/>
            <Meal meal="Snacks" mealItems={day.snackItems}/>
        </div>
    )
}

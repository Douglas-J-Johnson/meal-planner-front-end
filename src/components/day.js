import React from 'react'
import Meal from './meal'

export default function Day({day, addMealItem}) {
    return (
        <div className="day">
            {day.name}
            <hr></hr>
            < Meal day={day.name} meal="Breakfast" mealItems={day.breakfastItems} addMealItem={addMealItem} />
            < Meal day={day.name} meal="Lunch" mealItems={day.lunchItems} addMealItem={addMealItem} />
            < Meal day={day.name} meal="Dinner" mealItems={day.dinnerItems} addMealItem={addMealItem} />
            <hr></hr>
            < Meal day={day.name} meal="Snacks" mealItems={day.snackItems} addMealItem={addMealItem} />
        </div>
    )
}

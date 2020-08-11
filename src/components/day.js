import React from 'react'
import Meal from './meal'

export default function Day({day, dayIndex, addMealItem}) {
    return (
        <div className="day">
            <div className="day-title">
                {day.name}
            </div>
            <hr></hr>
            < Meal dayIndex={dayIndex} meal="Breakfast" mealItems={day.breakfastItems} addMealItem={addMealItem} />
            < Meal dayIndex={dayIndex} meal="Lunch" mealItems={day.lunchItems} addMealItem={addMealItem} />
            < Meal dayIndex={dayIndex} meal="Dinner" mealItems={day.dinnerItems} addMealItem={addMealItem} />
            <hr></hr>
            < Meal dayIndex={dayIndex} meal="Snacks" mealItems={day.snackItems} addMealItem={addMealItem} />
        </div>
    )
}

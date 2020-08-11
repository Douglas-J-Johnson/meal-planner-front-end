import React from 'react'
import Meal from './meal'

export default function Day({day, dayIndex, addMealItem, editMealItem}) {
    return (
        <div className="day">
            <div className="day-title">
                {day.name}
            </div>
            <hr></hr>
            {day.meals.map((meal, index) => 
                < Meal
                    key={index}
                    dayIndex={dayIndex}
                    mealName={meal.name}
                    mealIndex={index}
                    mealItems={meal.items}
                    addMealItem={addMealItem}
                    editMealItem={editMealItem}
                />
            )}
        </div>
    )
}

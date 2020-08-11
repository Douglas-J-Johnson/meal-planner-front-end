import React from 'react'
import FoodItem from './foodItem'

export default function meal({dayIndex, meal, mealItems, addMealItem}) {
    return (
        <div className={'meal ' + meal.toLowerCase()}>
            <div className="title" onClick={addMealItem} data-day-index={dayIndex} data-meal={meal}>
                {meal}
            </div>
            {mealItems.map((mealItem, index) => < FoodItem key={index} meal={meal.toLowerCase()} foodItem={mealItem} />)}
        </div>
    )
}

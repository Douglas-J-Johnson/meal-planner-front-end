import React from 'react'
import FoodItem from './foodItem'

export default function meal({day, meal, mealItems, addMealItem}) {
    return (
        <div className={'meal ' + meal.toLowerCase()}>
            <div onClick={addMealItem} data-day={day} data-meal={meal}>
                {meal}
            </div>
            {mealItems.map((mealItem, index) => < FoodItem key={index} meal={meal.toLowerCase()} foodItem={mealItem} />)}
        </div>
    )
}

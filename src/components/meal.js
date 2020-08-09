import React from 'react'
import FoodItem from './foodItem'

export default function meal({meal, mealItems}) {
    return (
        <div className={'meal ' + meal.toLowerCase()}>
            {meal}
            {mealItems.map((mealItem, index) => < FoodItem key={index} meal={meal.toLowerCase()} foodItem={mealItem} />)}
        </div>
    )
}

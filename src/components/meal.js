import React from 'react'
import FoodItem from './foodItem'

export default function meal({meal, mealItems}) {
    return (
        <div className={meal}>
            {mealItems.map((mealItem, index) => <FoodItem key={index} foodItem={mealItem} classNames={"food-item breakfast-item"}/>)}
        </div>
    )
}

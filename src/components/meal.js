import React from 'react'
import MealItem from './mealItem'

export default function meal({dayIndex, meal, mealIndex, addMealItem, editMealItem}) {
    return (
        <div className={'meal ' + meal.name.toLowerCase()}>
            <div className="title" onClick={addMealItem} data-day-index={dayIndex} data-meal-index={mealIndex}>
                {meal.name}
            </div>
            {meal.items.map((mealItem, index) =>
                < MealItem
                    key={index}
                    dayIndex={dayIndex}
                    mealName={meal.name.toLowerCase()}
                    mealIndex={mealIndex}
                    mealItem={mealItem}
                    mealItemIndex={index}
                    editMealItem={editMealItem}
                />
            )}
        </div>
    )
}

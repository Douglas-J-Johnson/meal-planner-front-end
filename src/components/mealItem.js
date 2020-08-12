import React from 'react'

export default function MealItem({dayIndex, mealName, mealIndex, mealItem, mealItemIndex, editMealItem}) {
    return (
        <>
            <input
                type="text"
                className={'meal-item ' + mealName}
                data-day-index={dayIndex}
                data-meal-index={mealIndex}
                data-meal-item-index={mealItemIndex}
                onChange={editMealItem}
                value={mealItem}
            />
        </>    
    )
}

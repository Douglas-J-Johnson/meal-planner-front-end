import React from 'react'
import MealItem from './mealItem'

export default function meal({dayIndex, mealName, mealIndex, mealItems, addMealItem, editMealItem}) {
    return (
        <div className={'meal ' + mealName.toLowerCase()}>
            <div className="title" onClick={addMealItem} data-day-index={dayIndex} data-meal-index={mealIndex}>
                {mealName}
            </div>
            {mealItems.map((mealItem, index) =>
                < MealItem
                    key={index}
                    dayIndex={dayIndex}
                    mealName={mealName.toLowerCase()}
                    mealIndex={mealIndex}
                    mealItem={mealItem}
                    mealItemIndex={index}
                    editMealItem={editMealItem}
                />
            )}
        </div>
    )
}

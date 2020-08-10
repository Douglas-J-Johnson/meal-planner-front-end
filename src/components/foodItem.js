import React from 'react'

export default function FoodItem({meal, foodItem}) {
    return (
        <div className={'food-item ' + meal}>
            {foodItem.name}
        </div>
    )
}

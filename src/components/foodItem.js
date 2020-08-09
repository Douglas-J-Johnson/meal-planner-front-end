import React from 'react'

export default function FoodItem({meal, foodItem}) {
    return (
        <div className={'food-item ' + meal}>
            Food Item
            {foodItem}
        </div>
    )
}

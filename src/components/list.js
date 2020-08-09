import React from 'react'
import ListItem from './listItem'

export default function List({list}) {
    return (
        <div className="list">
            {list.name}
            {list.items.map((listItem, index) => < ListItem key={index} listItem={listItem} />)}
        </div>
    )
}

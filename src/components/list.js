import React from 'react'
import ListItem from './listItem'

export default function List({list, addListItem}) {
    return (
        <div className="list">
            <div onClick={addListItem} data-list={list.name}>
                {list.name}
            </div>
            {list.items.map((listItem, index) => < ListItem key={index} listItem={listItem} />)}
        </div>
    )
}

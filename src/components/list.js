import React from 'react'
import ListItem from './listItem'

export default function List({list, listIndex, addListItem, editListItem}) {
    return (
        <div className="list">
            <div className="title" onClick={addListItem} data-list-index={listIndex}>
                {list.name}
            </div>
            {list.items.map((listItem, index) => 
                < ListItem
                    key={index}
                    listIndex={listIndex}
                    listItem={listItem}
                    listItemIndex={index}
                    editListItem={editListItem}
                />
            )}
        </div>
    )
}

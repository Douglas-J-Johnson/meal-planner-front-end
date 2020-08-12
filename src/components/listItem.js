import React from 'react'

export default function ListItem({listIndex, listItem, listItemIndex, editListItem}) {
    return (
        <div className="list-item">
            <input
                type="number"
                className="list-item-quantity"
                data-list-index={listIndex}
                data-list-item-index={listItemIndex}
                data-list-item-attribute="quantity"
                onChange={editListItem}
                value={listItem.quantity}
            />
            <input
                type="text"
                className="list-item-name"
                data-list-index={listIndex}
                data-list-item-index={listItemIndex}
                data-list-item-attribute="name"
                onChange={editListItem}
                value={listItem.name}
            />
        </div>
    )
}

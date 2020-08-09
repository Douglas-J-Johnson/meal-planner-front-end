import React from 'react'

export default function ListItem({listItem}) {
    return (
        <div className="list-item">
            {listItem.quantity + " " + listItem.name}
        </div>
    )
}

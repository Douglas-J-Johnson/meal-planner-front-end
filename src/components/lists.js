import React from 'react'
import List from './list'

export default function Lists({lists, addListItem}) {
    return (
        <div className="lists">
            {lists.map((list, index) => < List key={index} list={list} listIndex={index} addListItem={addListItem} />)}
        </div>
    )
}

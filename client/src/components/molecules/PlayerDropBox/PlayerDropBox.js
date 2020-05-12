import React from 'react'
import { useDrop } from 'react-dnd'

export default function PlayerDropBox({ accept, lastDroppedItem, handleDrop, classes}) {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: handleDrop,
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })
    const isActive = isOver && canDrop
          let backgroundColor = '#222'
          if (isActive) {
            backgroundColor = 'darkgreen'
          } else if (canDrop) {
            backgroundColor = 'darkkhaki'
    } 
    return (
        // <p>{accept}</p>
        <div ref={drop} className={classes} styles={backgroundColor}>
            {lastDroppedItem && <p>{lastDroppedItem.name}</p>}
        </div>
    )
}

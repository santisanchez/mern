import PlayerDropBox from '../../molecules/PlayerDropBox/PlayerDropBox'

import './FootballField.scss'

import React from 'react'

export default function FootballField({playerDropBox,handleDrop,isDropped}) {

  return (
      <div className="container">
        <div className="line"></div>
        <div className="half"></div>
        <div className="panelty top"></div>
        <div className="panelty bottom"></div>
        <div className="p-spot top">&nbsp;</div>
        <div className="p-spot bottom">&nbsp;</div>
        <div className="center"></div>
        <div className="p-place top"></div>
        <div className="p-place bottom"></div>
          <div className="pins">
            {playerDropBox.map(({id,classStyles,lastDroppedItem,accept},index)=>(
              (<PlayerDropBox key={id} classes={"pin "+classStyles} accept={accept} handleDrop={(item) => {handleDrop(index, item)}} lastDroppedItem={lastDroppedItem} />)
            ))}
          </div>
      </div>
  )
}
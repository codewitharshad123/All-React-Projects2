import React from 'react'
import "./Card.css"
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'
import Chip from '../Chips/Chip'
function Card() {
  return (
    <div className='card'>
        <div className='card_top'>
<div className='card_top_labels'>
<Chip  text="Frontend" color="green"/>
</div>
<MoreHorizontal/>
        </div>
<div className='card_title'>
dkfsdkfdskfkdsk
</div>
<div className='card_footer'>
<p><Clock/>29SEP</p>
<p><CheckSquare/>1/4</p>
</div>
    </div>
  )
}

export default Card
import React from 'react'
import "./Board.css"
import { MoreHorizontal } from 'react-feather'
import Card from '../Card/Card'
import Editable from '../Editable/Editable'
function Board() {
  return (
    <div className='board'>
       <div className='board_top'>
<p className='board_top_title'>TO-DO<span>2</span></p>
<MoreHorizontal/>
       </div>
       <div className='board_cards custom-scroll'>
<Card/>
<Card/>
<Card/>
<Card/>
<Editable displayCard="board_cards_add" text="Add Card" placeholder="ENTER THE CARD TITLE"/>
       </div>
    </div>
  )
}

export default Board
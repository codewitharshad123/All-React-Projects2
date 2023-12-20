import React,{useState,useEffect} from 'react'
import Board from './Board'
import GameOver from "./GameOver"
import GameState from "./GameState"
const PLAYER_X="X"
const PLAYER_O="O"
const winningCombination=[
  //ROW
{combo:[0,1,2], strikeClass:"strike-row-1"},
{combo:[3,4,5], strikeClass:"strike-row-1"},
{combo:[6,7,8], strikeClass:"strike-row-1"},
//COLUMS
{combo:[0,3,6], strikeClass:"strike-column-1"},
{combo:[1,4,7], strikeClass:"strike-column-2"},
{combo:[2,5,8], strikeClass:"strike-column-3"},
//dignoalS
{combo:[0,4,8], strikeClass:"strike-diagonal-1"},
{combo:[2,4,6], strikeClass:"strike-diagonal-2"},
]
function checkWinner(tiles,setStrikeClass,setGameState){
for(const{combo,strikeClass} of winningCombination){
const tileValue1=tiles[combo[0]]
const tileValue2=tiles[combo[1]]
const tileValue3=tiles[combo[2]]
if(
      tileValue1 !== null&&
      tileValue1 === tileValue2&&
      tileValue1 === tileValue3
 ) {
        setStrikeClass(strikeClass)
        if(tileValue1===PLAYER_X){
setGameState(GameState.playerXWins)
        }
        else{
          setGameState(GameState.playerOWins)
        }
      }
}
}
function TicTacToe() {
    const[tiles,setTiles]=useState(Array(9).fill(null))
    const[playerTurn,setPlayerTurn]=useState(PLAYER_X)
    const[strikeClass,setStrikeClass]=useState()
    const[gameState,setGameState]=useState(GameState.playerOwins)
const handleTileClick=(index)=>{
if(tiles[index]!==null){
return;
}

const newTiles=[...tiles]
newTiles[index]=playerTurn
setTiles(newTiles)
if(playerTurn===PLAYER_X){
    setPlayerTurn(PLAYER_O)
}
else{

setPlayerTurn(PLAYER_X)
}
    }
    useEffect(()=>{
      checkWinner(tiles,setStrikeClass,setGameState)
      },[tiles])
  return (
    <div>
    <h1>TicTacToe</h1>
    <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass}/>
    <GameOver gameState={gameState}/>
    </div>
  )
}
export default TicTacToe
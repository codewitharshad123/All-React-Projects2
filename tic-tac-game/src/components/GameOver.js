import GameState from "./GameState"
function GameOver({gameState}) {
    switch(gameState){
        case GameState.inProgress:
            return <></>
            case GameState.playerOwins:
                return <div className="game-over">O WINES</div>
                case GameState.playerXwins:
                    return <div className="game-over">X WINES</div>
                    case GameState.draw:
                        return <div className="game-over">Draw</div>
            default:
                return<></>
    }
}
export default GameOver;
import React from 'react'
import moonIcon from "./assets/moon.png"
import sunIcon from "./assets/sun.png"
import Header from './Components/Header/Header'
import KeyPad from './Components/Keypad/KeyPad'
import "./App.css"
import { useState } from 'react'
const usedKeyCodes = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
  104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109,
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["-", "+", "*", "/"];
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [expression, setExpression] = useState("")
  const [result, setResult] = useState("")
  const[history,setHistory]=useState([])
  const handleKeyPress = (keyCode, key) => {
    if (!keyCode) return
    //keyCode=keycode+""
    if (!usedKeyCodes.includes(keyCode)) return
    if (numbers.includes(key)) {
      if (key == "0") {
        if (expression.length === 0) return
      }
      calculateResult(expression+key)
      setExpression(expression + key)
    }
    else if (operators.includes(key)) {
      if (!expression) return
      const lastChar = expression.slice(-1)
      if (operators.includes(lastChar) || lastChar === '.') return; // Check for operators and decimal point
      setExpression(expression + key);
    }
    else if(key==="."){
      if(!expression)return
      const lastChar=expression.slice(-1)
      if(!numbers.includes(lastChar))return
      setExpression(expression+key)
    }
    else if (keyCode === 8) {
      if(!expression)return
      calculateResult(expression.slice(0,-1))
      setExpression(expression.slice(0,-1))
    }
    else if (keyCode === 13) {
      if(!expression)return
      calculateResult(expression)
      const tempHistory=[...history]
      if(tempHistory.length>20)tempHistory=tempHistory.splice(0,1)
      tempHistory.push(expression)
    setHistory(tempHistory)
  }
}
/*const calculateResult=(exp)=>{
if(!exp)return
const lastChar=exp.slice(-1)
if(!numbers.includes(lastChar))exp=exp.slice(0,-1)
const answer=eval(exp).toFixed(2)+""
setResult=answer
}*/
const calculateResult = (exp) => {
  if (!exp) return;
  const lastChar = exp.slice(-1);
  if (operators.includes(lastChar)) exp = exp.slice(0, -1);
  const answer = eval(exp).toFixed(2) + "";
  setResult(answer);
};
  return (
    <div className='app'
      tabIndex="0"
      onKeyDown={(event) => handleKeyPress(event.keyCode, event.key)}
      data-theme={isDarkMode ? "dark" : ""}>
      <div className="app_calculater">
        <div className="app_calculater_navbar">
          <div className='app_calculater_navbar_toggle'
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <div className={`app_calculater_navbar_toggle_circle ${isDarkMode ? "app_calculater_navbar_toggle_circle_active" : ""}`}>

            </div>
          </div>
          <img src={isDarkMode ? moonIcon : sunIcon} alt='' />

        </div>
        <Header expression={expression} result={result} history={history}/>
        <KeyPad handleKeyPress={handleKeyPress} />
      </div>
    </div>
  );
}
export default App
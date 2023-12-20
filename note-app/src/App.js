import React,{useState} from "react"
import './App.css';
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/SideBar/Sidebar";
function App() {
  const [notes,setNotes]=useState([])
const addNote=(color)=>{
  //..notes copy bnaa liaa haa kino kaa humaa state ko update karna haa orchnage karna hhaa kabhi hum agr rediux use kar rhaa haa yaa normal state bhi use kar rhaa hnaa to humaa direcltly state ko update nhi karna hota haa agr hum kara gaa to unnecessaray errors me jaa gaa hum log
const tempNotes=[...notes]
tempNotes.push({
  id:Date.now()+""+Math.floor(Math.random()*78),
  text:"",
  time:Date.now(),//data.now() yaa humaa miliseconds retunr kara gaa
  color,
});
setNotes(tempNotes)
}
  return (
    <div className="App">
<h1>Working</h1>
<NoteContainer notes={notes}/>
<Sidebar  addNote={addNote}/>
    </div>
  );
}

export default App;
import Home from "./pages/home/Home"
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write"
import Setting from "./pages/settings/Setting"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
function App() {
  const user=false
  return (
    <Router>
  <TopBar/>
  <Routes>
  <Route   path="/" element={<Home/>}/>
  <Route   path="/register" element={user ? <Home/>:<Register/>}/>
  <Route   path="/login" element={user ? <Home/>:<Login/>}/>
  <Route   path="/write" element={user?<Write/>:<Register/>}/>
  <Route   path="/setting" element={user?<Setting/>:<Register/>}/>
  <Route   path="/post" element={user?<Single/>:<Register/>}/>
  </Routes>
    </Router>
  );
}
export default App;
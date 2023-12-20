import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Error from './Pages/Error';
import Posts from './Pages/Posts';
import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';
function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/products/:productId' element={<SingleProduct/>}/>
    <Route path='/posts' element={<Posts/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  <Footer/>
 </BrowserRouter>
    </div>
  );
}

export default App;

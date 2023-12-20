import './App.css';
import Search from './components/search/search';
function App() {
const handleSearchChnage=(searchData)=>{
  console.log(searchData)
}
  return (
  <div className='container'>
<Search  onSearchChnage={handleSearchChnage}/>
  </div>
  );
}
export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './Pages/Home';
import Main from './Pages/Main';

function App() {
  
  return (
    <div>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/searchPokemon' element={<Main/>}/>
      </Routes>
    </div>
    );
}

export default App;

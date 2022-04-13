// imports 
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home/Home';
import Shop from './views/Shop/Shop';
import Search from './views/Search/Search'

// functional component
const App = () => {
  let [book, setBook] = useState();

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route children path='/' element={<Home />} />
        <Route children path='/shop' element={<Shop />} />
        <Route children path='/search' element={<Search />} />
      </Routes>
    </div>
  );
}

// export component

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './pages/home';
import Details from './pages/details';
import Favourites from './pages/favourites';




function App() {
  return (
    <div>
        <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
          <Navbar/>
          <Routes> 
              <Route path='/' element= {<Home/>} />
              <Route path='/favourites' element= {<Favourites/>} />
              <Route path='/recipie-item/:id' element= {<Details/>} />
          </Routes>
        </div>
      
    </div>
  );
}

export default App;

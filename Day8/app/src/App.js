import React from 'react';
import User from './Pages/user';
import Addusers from './Pages/Adduser';
import Editusers from './Pages/Edituser';
import {Routes,Route} from 'react-router-dom';
import './Assets/user.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/add' element={<Addusers/>}/>
        <Route path='/edit' element={<Editusers/>}/>
      </Routes>
    </>
  );
}

export default App;

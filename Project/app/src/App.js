import Login from "./components/Login";
import Home from "./components/Home";
//import Nav from './components/Nav'


import { Route, Routes } from 'react-router-dom';
import Reg from './components/Reg'
import Dashboard  from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Reg />} />
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>

    </>
  );
}

export default App;
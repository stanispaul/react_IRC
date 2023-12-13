import Login from "./components/Login";
import Home from "./components/Home";



import { Route, Routes } from 'react-router-dom';
import Reg from './components/Reg'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Reg />} />
      </Routes>

    </>
  );
}

export default App;
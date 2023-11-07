import logo from './logo.svg';
import './App.css';
import { Homepage } from './pages/Homepage/Homepage';
import {BrowserRouter, Route, Routes}  from "react-router-dom"
import { Login } from './components/authentication/Login';
import { Register } from './components/authentication/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Homepage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

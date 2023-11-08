import logo from './logo.svg';
import './App.css';
import { Homepage } from './pages/Homepage/Homepage';
import {BrowserRouter, Route, Routes}  from "react-router-dom"
import { Login } from './components/authentication/Login';
import { Register } from './components/authentication/Register';
import { Notes } from './components/Notes/Notes';
import { Navbar } from './components/Navbar/Navbar';
import { Edit } from './components/EditPage/Edit';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Homepage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/notes' element={<Notes/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

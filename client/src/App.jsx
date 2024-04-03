import { useState } from 'react'
import List from './views/List'
import Login from './views/Login'
import Edit from './views/Edit'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Add from './views/Add';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './views/Navbar';
import Register from './views/Register';
function App() {

  return (
    <>
    <div className='container'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/add' element={<Add/>} />
      <Route path='/register' element={
        <div className="row" >
          <div className="col-6">
            <Register/>
          </div>
          <div className="col-6">
            <Login/>
          </div>
        </div>
      }/>
      <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App

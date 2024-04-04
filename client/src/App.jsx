import { useState } from 'react';
import List from './views/List';
import CheckIn from './views/CheckIn';
import Pirate from './views/Pirate';
import Navbar from './views/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Add from './views/Add';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [ listaActualizada,useListaActualizada] = useState(true);
  return (
    <>
    <div className='container'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<CheckIn/>}/>
      <Route path='/pirates' element={<List listaActualizada={listaActualizada} useListaActualizada={useListaActualizada} />} />
      <Route path='/pirates/new' element={<Add/>} />
      <Route path="/pirates/:id" element={<Pirate listaActualizada={listaActualizada} useListaActualizada={useListaActualizada}/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NoteDetails from './pages/noteDetails'
import CreatePage from './pages/CreatePage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className=' bg-amber-100'>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetails />} />
      </Routes>
    </div>
  )
}

export default App

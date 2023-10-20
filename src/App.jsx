import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  

  return (
    <div className='app'>
      <Navbar />
      <HomePage />
      
    </div>
  )
}

export default App

import React from 'react'
import{BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Navbar from './static/Navbar'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/> 
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
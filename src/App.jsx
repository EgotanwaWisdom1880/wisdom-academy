import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// import Courses from './pages/Courses'
import About from './pages/About'
import Home from './pages/Home'
import Courses from './pages/Courses';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>        
     <Route index element={<Home/>}/>
     <Route path='courses' element={<Courses />}/>
     <Route path='About' element={<About />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

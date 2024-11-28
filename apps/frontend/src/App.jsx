import './App.css'
import PageNotFound from './pages/Error/PageNotFound'
import Landing from './pages/Landing/Landing'
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects/Projects'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default App

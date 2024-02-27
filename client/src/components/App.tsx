import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './NavBar'
import Employees from './pages/Employees'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/employees' element={<Employees />}/>
      </Routes>
    </>
  )
}

export default App

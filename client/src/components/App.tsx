import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './NavBar'
import EmployeeList from './pages/EmployeeList'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/employees' element={<EmployeeList />}/>
      </Routes>
    </>
  )
}

export default App

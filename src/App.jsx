import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import User from './pages/User'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Settings from './pages/Settings'
import Register from './pages/Register'

function App() {


  return (
    
     <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
     </BrowserRouter>
  
  )
}

export default App

import { Container } from 'react-bootstrap'
import { Header } from  './componentes/Header/Header'
import { Route , Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Signin } from './pages/Signin/Signin'
import './App.css'

function App() {
  
  return (
    <>
    
      <Header/>
      <Container>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
      </Container>
    </>
  )
}

export default App

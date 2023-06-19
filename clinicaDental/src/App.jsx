import { Container , Navbar, } from 'react-bootstrap'
import './App.css'

function App() {
  
  return (
    <>
    
      <Navbar className='navbarMain' style={{ justifyContent: 'space-between' }}>
        <section>
        <img alt='logo'></img>
        </section>
        <section>
          <img alt='login'></img>
          <img alt='sign in'></img>
        </section>
      </Navbar>
      <Container>
      <div>
        <h1>mi clinica</h1>
      </div>
      </Container>
    </>
  )
}

export default App

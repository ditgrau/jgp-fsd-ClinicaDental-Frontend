import { Container } from 'react-bootstrap'
import { Header } from './componentes/Header/Header'
import { SecondNavbar } from './componentes/SecondNavbar/SecondNavbar'
import { Body } from './pages/Body/Body'
import './App.css'

function App() {

  return (
    <>

      <Header />
      <SecondNavbar />
      <Container>
        <Body />
      </Container>
    </>
  )
}

export default App

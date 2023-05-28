import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

export default function NavBar(){
  return(
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      <Link className="link" to='/'>Resu__</Link>
        
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}
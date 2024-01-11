import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (

    <Navbar sticky="top" expand="lg" className="bg-body-secondary shadow-sm">
      <Container fluid>
        <Navbar.Brand href="/index.html">
          <img 
            src="/public/images/20240109_Martin.png" 
            alt="Logo" 
            className="d-inline-block align-top me-1"
            height= "32"
            width= "32"
          ></img>
          <strong>CaringCloak</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/index.html">Startseite</Nav.Link>
            <Nav.Link href="/public/pages/registrierung.html">Registrierung</Nav.Link>
            <Nav.Link href="/public/pages/faq.html">FAQ</Nav.Link>
            <Nav.Link href="/public/pages/kontakt.html">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default App;
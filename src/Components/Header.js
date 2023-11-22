import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header()
{
    return(
        <>
            <Navbar expand="lg" className="bg-dark text-white">
      <Container fluid>
        <Navbar.Brand className={"text-white"} href="#">Abdul Munam Memon</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className={"text-white"} href="#action1">Project</Nav.Link>
            <NavDropdown title="Reviews" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Seller</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Buyer
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link className={"text-white"} href="#action2">Social Media Profiles</Nav.Link>
            <Nav.Link className={"text-white"} href="#" disabled>
              Contact us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-primary">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
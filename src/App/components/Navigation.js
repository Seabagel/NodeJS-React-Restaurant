import { Container, Navbar, Nav } from "react-bootstrap";
import "../css/Navigation.css";

export const Navigation = () => (
  <>
    <Navbar className="sticky-top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Restaurant Website</Navbar.Brand>
        <Navbar.Toggle color="red" bg="dark" variant="dark" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

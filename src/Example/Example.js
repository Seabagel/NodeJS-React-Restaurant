import "./Example.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Example@email.com" />
                  <Form.Text className="text-muted">
                    We'll never share your email address, trust us!
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" variant="secondary">
              Login
            </Button>
          </Form>

          <Card className="mb-3" style={{ color: "#444" }}>
            <Card.Img src="https://picsum.photos/250/150" />
            <Card.Body>
              <Card.Title>Card Example</Card.Title>
              <Card.Text>This is an example of react bootstrap cards</Card.Text>

              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>

          <Breadcrumb>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Test1</Breadcrumb.Item>
            <Breadcrumb.Item active>Test2</Breadcrumb.Item>
          </Breadcrumb>

          <Alert variant="success">This is a button</Alert>

          <Button>Hello World</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;

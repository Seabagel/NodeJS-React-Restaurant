import "../css/Jumbotron.css";

import { Jumbotron as Jumbo, Container } from "react-bootstrap";

export const Jumbotron = () => (
  <>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Order from our restaurant</p>
      </Container>
    </Jumbo>
  </>
);

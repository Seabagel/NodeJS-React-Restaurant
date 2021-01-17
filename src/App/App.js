import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NoMatch } from "./pages/NoMatch";

import { Layout } from "./components/Layout";
import { Navigation } from "./components/Navigation";
import { Jumbotron } from "./components/Jumbotron";

export const App = () => (
  <>
    <Navigation />
    <Jumbotron />
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Layout>
  </>
);

import './App.css';
import { Router } from "@reach/router";
import { Navbar, Nav } from 'react-bootstrap';
import Homepage from './components/Homepage';
import Register from './components/Registration';
import Login from './components/Login';
import Category from './components/Category';

function App() {
  return (
    <div className="container">
      <div>
      <h1>Moto Hub Center</h1>
        <Navbar>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/category/:category">Helmets</Nav.Link>
            <Nav.Link href="/category/:category">Jackets</Nav.Link>
            <Nav.Link href="/category/:category">Pants</Nav.Link>
            <Nav.Link href="/category/:category">Gloves</Nav.Link>
            <Nav.Link href="/category/:category">Motorcycle</Nav.Link>
            <Nav.Link href="/category/:category">Accessories</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div>
        <Router>
          <Homepage path="/" />
          <Register path="/register" />
          <Login path="/login" />
          <Category path="/category/:category" />
        </Router>
      </div>
    </div>
  );
}

export default App;

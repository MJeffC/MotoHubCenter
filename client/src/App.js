import './App.css';
import { Router } from "@reach/router";
import { Navbar, Nav } from 'react-bootstrap';
import Homepage from './components/Homepage';
import Register from './components/Registration';
import Login from './components/Login';
import Category from './components/Category';
import UserProfile from './components/UserProfile';
import EditMoto from './components/EditMoto';
import DetailMoto from './components/DetailMoto';

function App() {
  return (
    <div className="container">
      <div>
        <div className="headerline">
          <h1>Moto Hub Center</h1>
        </div>
        <Navbar className="navBarTop">
          {/* <Nav> */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/userProfile">Add Item</Nav.Link>
            <Nav.Link href="/moto/cat/Helmet">Helmets</Nav.Link>
            <Nav.Link href="/moto/cat/Jacket">Jackets</Nav.Link>
            <Nav.Link href="/moto/cat/Pants">Pants</Nav.Link>
            <Nav.Link href="/moto/cat/Gloves">Gloves</Nav.Link>
            <Nav.Link href="/moto/cat/Shoes">Shoes</Nav.Link>
            <Nav.Link href="/moto/cat/Motorcycle">Motorcycle</Nav.Link>
            <Nav.Link href="/moto/cat/Accessories">Accessories</Nav.Link>
          {/* </Nav> */}
        </Navbar>
      </div>
      <div>
        <Router className="navBarBottom">
          <Homepage path="/" />
          <Register path="/register" />
          <Login path="/login" />
          <Category path="/moto/cat/:category" />
          <UserProfile path="/userProfile" />
          <EditMoto path="/moto/:id/edit" />
          <DetailMoto path="/moto/:id/detail" />
        </Router>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
src="https://akjanitorial.ca/wp-content/uploads/2021/06/Thumbnail.png"
            alt="Sample Brand Logo"
            width="35"
            className="align-top d-inline-block"
            height="35"
          />AKJanitorial
        </Navbar.Brand>
      </Navbar>

      </header>
      <body>
        <p>AKJanitorial</p>
        AKJanitorial
      </body>
    </div>
  );
}

export default App;

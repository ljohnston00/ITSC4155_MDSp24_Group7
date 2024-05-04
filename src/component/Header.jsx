import 'bootstrap/dist/css/bootstrap.min.css'
import signoutHandler from '../services/auth/logout.service';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';

function Header(props){

    return(

      props.isLoggedIn ? 
      <Navbar className = "App-header-notLoggedIn" style={{backgroundColor: '#0C1618', paddingRight: '15px'}}>
        <Navbar.Brand className = 'App-link Title-notLoggedIn'><a href="/dashboard">MoneyMarket</a></Navbar.Brand> 
        <div className='spacer'></div>
        <Nav>
          <Nav.Link className = 'App-link nonTitle-nLI' href="/learninghub">Learning Hub</Nav.Link>
          <Nav.Link className = 'App-link nonTitle-nLI' href="/stockdata">Live Markets</Nav.Link>
          <Nav.Link className = 'App-link nonTitle-nLI' href="/news">News</Nav.Link>
        </Nav>
        <Nav> 
          <NavDropdown title="Menu" id="nav-dropdown">
            <Nav.Link className = 'App-link nonTitle-nLI dropDownNav' href="/profile">Profile</Nav.Link>
            <Nav.Link className = 'App-link nonTitle-nLI dropDownNav' href="/settings">Settings</Nav.Link>
            <Nav.Link className = 'App-link nonTitle-nLI dropDownNav' href="/login" onClick={signoutHandler}>Logout</Nav.Link>
          </NavDropdown>
        </Nav>
        
    </Navbar>
        :

    <Navbar className = "App-header-notLoggedIn">
        <Navbar.Brand className = 'App-link Title-notLoggedIn'><a href="/">MoneyMarket</a></Navbar.Brand>  
        <Nav.Link className = 'App-link nonTitle-nLI' href="/login">Log In</Nav.Link>
    </Navbar>
  
    );
}

export default Header;
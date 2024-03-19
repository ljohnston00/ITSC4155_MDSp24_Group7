import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar } from 'react-bootstrap';

function Header(props){

    return(

      props.isLoggedIn ? 
        <header className="App-header-loggedIn">
          <nav>   
            <ul className="ul-loggedIn">
              <li className='material-symbols-outlined App-link profile'><a href="#">Account_Circle</a></li>
              <li className='App-link nonTitle'><a href="/news">News</a></li>
              <li className='App-link nonTitle'><a href="/live">Live Markets</a></li>
              <li className='App-link Title'><a href="/">MoneyMarket</a></li>
              <li className='App-link nonTitle'><a href="/learn">Learn</a></li>
              <li className='App-link nonTitle'><a href="/content">Content</a></li>
              <li className='material-symbols-outlined App-link settings'><a href="#">Settings</a></li>
            </ul>
          </nav>
      </header> :

      
  /*<header className="App-header-notLoggedIn">
      <nav>   
        <ul className="ul-notLoggedIn">
          <li className='App-link Title-notLoggedIn'><a href="/">MoneyMarket</a></li>  
          <li className='App-link nonTitle-nLI'><a href="/Dashboard">Dashboard</a></li>
          <li className='App-link nonTitle-nLI'><a href="/Login">Log In</a></li>
        </ul>
      </nav>
  </header>*/

    <Navbar className = "App-header-notLoggedIn">
        <Navbar.Brand className = 'App-link Title-notLoggedIn'><a href="/">MoneyMarket</a></Navbar.Brand>  
        <Nav.Link className = 'App-link nonTitle-nLI' href="/Dashboard">Dashboard</Nav.Link>
        <Nav.Link className = 'App-link nonTitle-nLI' href="/Login">Log In</Nav.Link>
    </Navbar>
  
    );
}

export default Header;
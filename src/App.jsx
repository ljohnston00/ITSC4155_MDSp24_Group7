import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Index from './Index.jsx'
import LiveMarkets from './LiveMarkets.jsx'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  let isLoggedIn = false;
  return (
    <Router>
      <>
        <Header isLoggedIn={isLoggedIn}/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Index />}></Route>
            <Route path='/live' element={<LiveMarkets/>}></Route>
            <Route path='/Dashboard' element={<Dashboard/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
          </Routes>
          </div>

        


        <Footer/>
      </>
    </Router>
  );
}

export default App;

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Index from './Index.jsx'
import LiveMarkets from './LiveMarkets.jsx'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react'
import { AuthProvider } from './providers/authprovider.jsx';



function App() {

 

  let isLoggedIn = false;
  return (
    <AuthProvider>
    <Router>
      <>
        <Header isLoggedIn={isLoggedIn}/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<><Index /> <h1>{}</h1></>}></Route>
            <Route path='/stockdata' element={<LiveMarkets/>}></Route>
            <Route path='/Dashboard' element={<Dashboard/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
          </Routes>
          </div>

        


        <Footer/>
      </>
    </Router>
    </AuthProvider>
  );
}

export default App;

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Index from './Index.jsx'
import LiveMarkets from './LiveMarkets.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  let isLoggedIn = true;
  return (
    <Router>
      <>
        <Header isLoggedIn={isLoggedIn}/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Index isLoggedIn={isLoggedIn}/>}></Route>
            <Route path='/live' element={<LiveMarkets/>}></Route>
          </Routes>
          </div>

        


        <Footer/>
      </>
    </Router>
  );
}

export default App;

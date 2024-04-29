import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Index from './Index.jsx'
import LiveMarkets from './LiveMarkets.jsx'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import News from './News.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react'
import { AuthProvider, useAuth} from './providers/authprovider.jsx';
import LearningSeries from './LearningSeries.jsx'
import LearningSeriesHub from './LearningSeriesHub.jsx'
import Profile from './Profile.jsx'



function Main() {
const { auth } = useAuth();
 
  return (
    <Router>
      <>
        <Header isLoggedIn={!!auth}/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<><Index /> <h1>{}</h1></>}></Route>
            <Route path='/stockdata' element={<LiveMarkets/>}></Route>
            <Route path='/news' element={<News/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/learninghub' element={<LearningSeriesHub/>}></Route>
            <Route path='/series/:seriesId' element={<LearningSeries/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
          </Routes>
          </div>

        


        <Footer/>
      </>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}

export default App;

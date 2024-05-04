import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import Index from './page/Index.jsx'
import LiveMarkets from './page/LiveMarkets.jsx'
import Dashboard from './page/Dashboard.jsx'
import Login from './page/Login.jsx'
import News from './page/News.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react'
import { AuthProvider, useAuth } from './providers/authprovider.jsx';
import LearningSeries from './page/LearningSeries.jsx'
import LearningSeriesHub from './page/LearningSeriesHub.jsx'
import Profile from './page/ProfilePage.jsx'
import Settings from './page/Settings.jsx'
import Paths from "./services/path.service.js";
import React from 'react';
import ErrorBoundary from './component/ErrorBoundary.jsx';



function Main() {
const { auth } = useAuth();
 
  return (
    <Router>
      <>
        <Header isLoggedIn={auth}/>
        <div className='content'>
          <Routes>
              <Route path={Paths.HOME} element={<><Index /> <h1>{}</h1></>}/>
              <Route path={Paths.STOCKDATA} element={<LiveMarkets/>}/>
              <Route path={Paths.NEWS} element={<News/>}/>
              <Route path={Paths.DASHBOARD} element={<Dashboard/>}/>
              <Route path={Paths.LOGIN} element={<Login/>}/>
              <Route path={Paths.LEARNINGHUB} element={<LearningSeriesHub/>}/>
              <Route path={Paths.SERIES + '/:seriesId'} element={<LearningSeries/>}/>
              <Route path={Paths.PROFILE} element={<Profile/>}/>
              <Route path={Paths.SETTINGS} element={<Settings/>}/>
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
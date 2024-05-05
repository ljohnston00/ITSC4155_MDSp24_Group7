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
import CreateLearningSeries from './page/CreateLearningSeries.jsx';
import Paths from "./services/path.service.js";
import React from 'react';
import ErrorBoundary from './component/ErrorBoundary.jsx';
import SuccessPage from './page/SuccessPage';
import FailurePage from './page/FailurePage';


function Main() {
const { auth } = useAuth();
 
  return (
    <Router>
      <>
        <Header isLoggedIn={!!auth}/>
        <div className='content'>
          <ErrorBoundary>
            <Routes>
                <Route path={Paths.HOME} element={<><Index /></>}/>
                <Route path={Paths.STOCKDATA} element={<LiveMarkets/>}/>
                <Route path={Paths.NEWS} element={<News/>}/>
                <Route path={Paths.DASHBOARD} element={<Dashboard/>}/>
                <Route path={Paths.LOGIN} element={<Login/>}/>
                <Route path={Paths.LEARNINGHUB} element={<LearningSeriesHub/>}/>
                <Route path={Paths.SERIES + '/:seriesId'} element={<LearningSeries/>}/>
                <Route path={Paths.CREATELEARNINGSERIES} element={<CreateLearningSeries/>}/>
                <Route path={Paths.PROFILE} element={<Profile/>}/>
                <Route path={Paths.SUCCESS} element={<SuccessPage />} /> 
                <Route path={Paths.FAILURE} element={<FailurePage />} /> 
            </Routes>
          </ErrorBoundary>
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

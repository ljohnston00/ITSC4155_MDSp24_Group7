import React, { useState } from 'react';
import { Button, Row, Col, Navbar, Nav, Form } from 'react-bootstrap';
import StockCard from '../component/StockCard';
import FinancialCard from '../component/FinancialCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import withAuth from '../component/RestrictedPage';

function LiveMarkets() {
  const [timeSpan, setTimeSpan] = useState('day');
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2024-03-15');
  const [financialView, setFinancialView] = useState('cashflow');
  const [searchTerm, setSearchTerm] = useState('');
  const [ticker, setTicker] = useState(''); 

  const handleSearch = () => {
    setTicker(searchTerm);
  };

  return (
    <div className="container-fluid liveMarketContainer">
      <div className='topContainer' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}> {/* Modify this line */}
        <h1 className='liveMarketsTitle'>Live Markets</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Form inline className='tickerSearch'>
            <Form.Control type="text" placeholder="Search" className="mr-sm-2 searchBar" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <Button className='searchButton' variant="outline-success" onClick={handleSearch}>Search</Button>
          </Form>
          <h1 className='tickerShow'>{ticker}</h1>
        </div>
      </div>
      <div className="row graphs">
        <div className='graphCard'>
          <Navbar bg="light" variant="light" className='marketNav'>
            <Nav className="mr-auto selections">
              <Nav.Link className='timeButton' onClick={() => setTimeSpan('day')}>Daily</Nav.Link>
              <Nav.Link className='timeButton' onClick={() => setTimeSpan('week')}>Weekly</Nav.Link>
              <Nav.Link className='timeButton' onClick={() => setTimeSpan('month')}>Monthly</Nav.Link>
              <Nav.Link className='timeButton' onClick={() => setTimeSpan('quarter')}>Quarterly</Nav.Link>
              <Nav.Link className='timeButton' onClick={() => setTimeSpan('year')}>Yearly</Nav.Link>
            </Nav>
          </Navbar>
          <StockCard ticker={ticker} timeSpan={timeSpan} startDate={startDate} endDate={endDate} />
        </div>
        <div className='graphCard'>
          <Navbar bg="light" variant="light" className='marketNav'>
            <Nav className="mr-auto selections">
              <Nav.Link className='timeButton' onClick={() => setFinancialView('cashflow')}>Cashflow Chart</Nav.Link>
              <Nav.Link className='timeButton' onClick={() => setFinancialView('balanceSheetTable')}>Balance Sheet Table</Nav.Link>
              <Nav.Link className='timeButton' onClick={() => setFinancialView('balanceSheetChart')}>Balance Sheet Chart</Nav.Link>
            </Nav>
          </Navbar>
          <FinancialCard ticker={ticker} view={financialView} />
        </div>
      </div>
    </div>
  );
};

export default withAuth(LiveMarkets);
import React, { useEffect, useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Sidebar from './SideBar';
import StockCard from './StockCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function LiveMarkets(){

  const [timeSpan, setTimeSpan] = useState('week');
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2024-03-15');
  const [showSidebar, setShowSidebar] = useState(false);
  const [numCards, setNumCards] = useState(6);



  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleNumCardsChange = (event) => {
    setNumCards(event.target.value);
  };

    
return (
    <div className="container-fluid">
      <h1 className='liveMarketsTitle'>Live Markets</h1>
      <div className="row">
        <div>
          <Button className='toggleButton' onClick={toggleSidebar}>Adjust Graphs</Button>
          <Sidebar show={showSidebar} toggle={toggleSidebar} onNumCardsChange={handleNumCardsChange} setStartDate={setStartDate} setEndDate={setEndDate} setTimeSpan={setTimeSpan} />
          </div>
          <div>
          <Row>
        {numCards > 0 ? (
          Array.from({ length: numCards }, (_, i) => (
            <Col sm={12} md={8} lg={6} key={i}>
              <StockCard timeSpan={timeSpan} startDate={startDate} endDate={endDate} />
            </Col>
          ))
        ) : (
          <p>No stock graphs are currently being displayed. Please enter a number in the sidebar to view stock graphs.</p>
        )}
      </Row>
          </div>
      </div>
    </div>
  );
};

export default LiveMarkets;
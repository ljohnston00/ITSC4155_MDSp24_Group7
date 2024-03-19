import React, { useEffect, useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Sidebar from './SideBar';
import StockCard from './StockCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function LiveMarkets(){

 const [stockdata, setStockData] = useState([]);
 const [showSidebar, setShowSidebar] = useState(false);
 const [numCards, setNumCards] = useState(6);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleNumCardsChange = (event) => {
    setNumCards(event.target.value);
  };
/*
 useEffect(() => {
  const fetchTickerData = async () => {
      try {
          const response = await fetch('http://localhost:5000/stockdata/ticker', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "tickerName": "AAPL",
                "timeSpan": "1m",
                "startDate": "2022-01-01",
                "endDate": "2022-01-31",
                "limit": "100"
              })
          });

          const data = await response.json();
          setStockData(data);
      } catch (error) {
          console.error("Error fetching ticker data: ", error);
      }
  };

  fetchTickerData();
}, []);
*/
    
return (
    <div className="container-fluid">
      <div className="row">
        <div>
          <Button className='toggleButton' onClick={toggleSidebar}>Adjust Graphs</Button>
          <Sidebar show={showSidebar} toggle={toggleSidebar} onNumCardsChange={handleNumCardsChange} />
          </div>
          <div>
          <Row>
        {numCards > 0 ? (
          Array.from({ length: numCards }, (_, i) => (
            <Col sm={12} md={6} lg={4} key={i}>
              <StockCard />
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
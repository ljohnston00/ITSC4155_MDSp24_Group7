import React from 'react';
import { Card } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';

const StockCard = ({ stock }) => {
  const series = [{
    name: "Stock price",
    data: [31, 40, 28, 51, 42, 109, 100]
  }];


  const options = {
    chart: {
      type: 'line'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    }
  };

  return (
    <Card style={{ width: '18rem' }} className='stockCard'>
      <Card.Body>
        <Card.Title>{"stock.name"}</Card.Title>
        <ReactApexChart options={options} series={series} type="line" height={350} />
      </Card.Body>
    </Card>
  );
};
  
  export default StockCard;
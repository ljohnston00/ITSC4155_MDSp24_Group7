import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const Sidebar = (props) => {
  const {show, toggle, onNumCardsChange, setStartDate, setEndDate, setTimeSpan} = props;

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [timeRange, setTimeRange] = useState('days');
  const [showSPG, setShowSPG] = useState(false);
  const [showVolume, setShowVolume] = useState(false);

  // useEffect(() => {
  //   setStartDate(fromDate);
  //   setEndDate(toDate);
  //   setTimeSpan(timeRange);
  // }, [fromDate, toDate, timeRange, setStartDate, setEndDate, setTimeSpan]);


    return (
      <div className={`sideBar ${show ? 'show' : ''}`}>
        <div className='mb-1 d-flex justify-content-center align-items-center'>
          <label htmlFor="fromDate">From:</label>
          </div>

          <div className='mb-1 d-flex justify-content-center align-items-center'>
            <input className='dateI' type="date" id="fromDate" value={fromDate} onChange={function (e) { setFromDate(e.target.value); props.setStartDate(e.target.value); }}></input>
          </div>

          <div className='mb-1 d-flex justify-content-center align-items-center'>
            <label htmlFor="toDate">To:</label>
          </div>

          <div className='mb-4 d-flex justify-content-center align-items-center'>
            <input className='dateI' type="date" id="toDate" value={toDate} onChange={function (e) { setToDate(e.target.value); props.setEndDate(e.target.value); }}></input>
          </div>

          <hr className='lineSB' />

          <fieldset className='mb-1 d-flex justify-content-center align-items-center'>
            <div className="time-range">
              <div>
                <input type="radio" id="day" name="time-range" value="day" checked={timeRange === 'day'} onChange={function (e) { setTimeRange(e.target.value); setTimeSpan(e.target.value); }}></input>
                <label htmlFor="day">Days</label>
              </div>

              <div>
                <input type="radio" id="week" name="time-range" value="week" checked={timeRange === 'week'} onChange={function (e) { setTimeRange(e.target.value); setTimeSpan(e.target.value); }}></input>
                <label htmlFor="week">Weeks</label>
              </div>

              <div>
                <input type="radio" id="month" name="time-range" value="month" checked={timeRange === 'month'} onChange={function (e) { setTimeRange(e.target.value); setTimeSpan(e.target.value); }}></input>
                <label htmlFor="month">Months</label>
              </div>

              <div>
                <input type="radio" id="quarter" name="time-range" value="quarter" checked={timeRange === 'quarter'} onChange={function (e) { setTimeRange(e.target.value); setTimeSpan(e.target.value); }}></input>
                <label htmlFor="quarter">Quarters</label>
              </div>

              <div>
                <input type="radio" id="year" name="time-range" value="year" checked={timeRange === 'year'} onChange={function (e) { setTimeRange(e.target.value); setTimeSpan(e.target.value); }}></input>
                <label htmlFor="year">Years</label>
              </div>
            </div>
          </fieldset>

          <hr className='lineSB' />

          <fieldset>
            <div className="form-check mb-3 d-flex justify-content-center">
              <input type="checkbox" id="spg" name="spg"className="form-check-input" checked={showSPG} onChange={function (e) { setShowSPG(e.target.checked); }} />
              <label htmlFor="spg" className="form-check-label">Share Price Graph</label>
            </div>

            <div className="form-check mb-3 d-flex justify-content-center">
              <input type="checkbox" id="volume" name="volume" className="form-check-input"  checked={showVolume} onChange={function (e) { setShowVolume(e.target.checked); }} />
              <label htmlFor="volume" className="form-check-label">Volume Graph</label>
            </div>  

            <div className="form-check mb-3 d-flex justify-content-center">          
              <label htmlFor="graphsNumber" className="form-check-label">Graphs:</label>
              <input type="number" id="graphsNumber" name="graphsNumber" min="1" max="100" onChange={props.onNumCardsChange}></input>
            </div>

            <div className="form-check mb-3 d-flex justify-content-center">
              <Button className='closeBtn' onClick={toggle}>Close</Button>
            </div>
          </fieldset>
      </div>
    );
  };

  export default Sidebar;
import React from 'react';
import { Button } from 'react-bootstrap';

const Sidebar = (props) => {

    const {show, toggle, onNumCardsChange} = props;
    return (
      <div className={`sideBar ${show ? 'show' : ''}`}>
        
            <div className='mb-1 d-flex justify-content-center align-items-center'>
            <label htmlFor="fromDate">From:</label>
            </div>

            <div className='mb-1 d-flex justify-content-center align-items-center'>
            <input className='dateI' type="date" id="fromDate"></input>
            </div>

            <div className='mb-1 d-flex justify-content-center align-items-center'>
            <label htmlFor="toDate">To:</label>
            </div>

            <div className='mb-4 d-flex justify-content-center align-items-center'>
            <input className='dateI' type="date" id="toDate"></input>
            </div>

            <hr className='lineSB' />

            <fieldset className='mb-1 d-flex justify-content-center align-items-center'>
              <div className="time-range">
                <div>
                <input type="radio" id="Today" name="time-range" value="today"></input>
                <label htmlFor="Today">Today</label>
                </div>

                <div>
                <input type="radio" id="1month" name="time-range" value="1month"></input>
                <label htmlFor="1month">1 Month</label>
                </div>

                <div>
                <input type="radio" id="3months" name="time-range" value="3months"></input>
                <label htmlFor="3months">3 Months</label>
                </div>

                <div>
                <input type="radio" id="6months" name="time-range" value="6months"></input>
                <label htmlFor="6months">6 Months</label>
                </div>
                <div>
                <input type="radio" id="ytd" name="time-range" value="ytd"></input>
                <label htmlFor="ytd">Year to Date</label>
                </div>
              </div>
            </fieldset>

            <hr className='lineSB' />

            <fieldset>
              <div className="form-check mb-3 d-flex justify-content-center">
                <input type="checkbox" id="spg" name="spg"className="form-check-input"  />
                <label htmlFor="spg" className="form-check-label">Share Price Graph</label>
              </div>
              <div className="form-check mb-3 d-flex justify-content-center">
                <input type="checkbox" id="volume" name="volume" className="form-check-input" />
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
import React from 'react';

const FailurePage = () => {
  return (
    <div className='sfDiv'>
      <div className='sfDiv2'>
        <h1>Payment Failed</h1>
        <p>There was a problem processing your payment. Please try again.</p>
        <h1><span className="material-symbols-outlined xIcon">close</span></h1>
      </div>
    </div>
  );
};

export default FailurePage;

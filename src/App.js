import React from 'react';
import './App.css';
import chip from './chip.jpg'
import mastercard from './mastercard.jpg'

function App() {
  return (
    <div className="App">
      <div className='card'>
        <h1 className='card-title'> CREDIT CARD </h1>
        <img src={chip} width='80px' />
        <div className='card-infos'>
          <div className='code'
          // style={{width:'120px',flexDirection:'column'}}
          >
            <p className='card-number'>7253 3656 7586 1245</p>
            <div className='date'>
              <h6 className='code2'>5422</h6>
              <div className='data2'>
                <p className='code3'>Month/Year</p>
                <div className="validity">
                  <p className='code3'>Valid <br />Thru</p>
                  <p className='code2'> 11/50</p>
                </div>
              </div>
            </div>
            <h6 className='client-name'>CARDHOLDER</h6>
          </div>

          <img src={mastercard} id='mast'></img>
        </div>
      </div>

    </div>
  );
}

export default App;

import React from 'react';
import Piechart from './piechar';

export default function RealtimeGraph() {
  return (
    <main className='intro-section'>
      <div className='container'>
        <div className='grid'>
          <div className='column-xs-12'>
            <div className='row justify-content-between'>
              <div className='col-5 page'>
                <Piechart color='paired' name='humidity' numeral={25} total={100} />
              </div>
              <div className='col-5 page'>
                <Piechart color='yellow_orange_red' name='temperature' numeral={16} total={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

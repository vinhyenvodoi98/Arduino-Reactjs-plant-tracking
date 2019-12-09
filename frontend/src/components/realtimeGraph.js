import React from 'react';
import Piechart from './piechar';
import { useSelector } from 'react-redux';

export default function RealtimeGraph() {
  const data = useSelector(state => state);
  console.log(data);

  return (
    <main className='intro-section'>
      <div className='container'>
        <div className='grid'>
          <div className='column-xs-12'>
            {data.project.realtime !== null ? (
              <div className='row justify-content-between'>
                <div className='col-6 page'>
                  <Piechart
                    color='paired'
                    name='humidity'
                    numeral={data.project.realtime.humidity}
                    total={100}
                  />
                </div>
                <div className='col-6 page'>
                  <Piechart
                    color='yellow_orange_red'
                    name='temperature'
                    numeral={data.project.realtime.temperature}
                    total={50}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

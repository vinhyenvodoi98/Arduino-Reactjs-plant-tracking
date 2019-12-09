import React from 'react';
import ColumnChar from './columnChar';
import { useSelector } from 'react-redux';
import TemperatureColumn from './temperatureColumn';

export default function ColumnPage() {
  const data = useSelector(state => state);
  console.log(data);

  return (
    <main className='intro-section'>
      <div className='container'>
        <div className='grid'>
          <div className='column-xs-12'>
            {data.project.realtime !== null ? (
              <div className='col'>
                <ColumnChar />
                <TemperatureColumn />
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

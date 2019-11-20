import React from 'react';
import Modernica from '../images/Modernica.jpg';

function Body() {
  return (
    <main className='intro-section'>
      <div className='container'>
        <div className='grid'>
          <div className='column-xs-12'>
            <ul className='slider'>
              <li className='slider-item active'>
                <div className='grid vertical'>
                  <div className='column-xs-12 column-md-2 hide-mobile'>
                    <div className='intro'>
                      <a href='/'>
                        <h1 className='title'>
                          <span className='underline'>Make Oxigen</span>
                        </h1>
                      </a>
                    </div>
                  </div>
                  <div className='column-xs-12 column-md-10'>
                    <div className='image-holder'>
                      <img src={Modernica} alt='' />
                    </div>
                    <div className='grid'>
                      <div className='column-xs-12 column-md-9'>
                        <div className='intro show-mobile'>
                          <a href='/'>
                            <h1 className='title'>
                              <span className='underline'>Plant a tree</span>
                            </h1>
                          </a>
                        </div>
                        <p className='description'>
                          Planting a tree is much better than wearing a mask to be safe from
                          pollution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Body;

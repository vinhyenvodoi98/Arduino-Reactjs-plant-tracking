import React from 'react';

function Nav() {
  return (
    <nav className='flex-nav'>
      <div className='container'>
        <div className='grid'>
          <div className='column-xs-9 column-md-8'></div>
          <div className='column-xs-3 column-md-4'>
            <a href='/' className='toggle-nav'>
              Menu <i className='ion-navicon-round'></i>
            </a>
            <ul>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Plant Your Tree</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

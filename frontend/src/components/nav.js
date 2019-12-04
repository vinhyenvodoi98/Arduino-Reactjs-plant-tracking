import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to='/'>About</Link>
              </li>
              <li>
                <Link to='/showRealtime'>Plant Your Tree</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

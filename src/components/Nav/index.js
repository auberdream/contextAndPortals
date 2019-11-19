import React from 'react';
import { Link } from 'react-router-dom'
import './index.css'

export default () => (
  <nav className={'nav'}>
    <div>
      <div className={'nav__link'}>
        <Link to={'/'}>Home</Link>
      </div>
      <div className={'nav__link'}>
        <Link to={'/about'}>About</Link>
      </div>
      <div className={'nav__link'}>
        <Link to={'/maps'}>Maps</Link>
      </div>
      <div className={'nav__link'}>
        <Link to={'/admin'}>Administration</Link>
      </div>
    </div>
    <div>
      <div className={'nav__link'}>
        <Link to={'/logout'}>Logout</Link>
      </div>
    </div>
  </nav>
)
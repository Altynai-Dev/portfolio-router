import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
    <aside className='aside'>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <i className="icon-home"> Home</i>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/about" className="nav__link">
                <i className="icon-user-following"> About</i>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/portfolio" className="nav__link">
                <i className="icon-layers"> Projects</i>
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                <i className="icon-bubble"> Contact Me</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2023</span>
      </div>
    </aside>

    <div className="nav__toggle">
      <i className="icon-menu"></i>
    </div>
    </>
  )
}

export default Sidebar
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';

class NavBar extends React.PureComponent {
  render() {
    return (
      <header className="header-container">
        <nav className="main-navbar">
          <h1>Bookstore CMS</h1>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link-a">BOOKS</Link>
            </li>

            <li>
              <Link to="/categories" className="nav-link-a">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
        <div className="icon-holder">
          <FaRegUser className="nav-icon" />
        </div>
      </header>
    );
  }
}
export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.PureComponent {
  render() {
    return (
      <header className="header-container">
        <nav>
          <h1>Bookstore CMS</h1>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link-a">Books</Link>
            </li>

            <li>
              <Link to="/categories" className="nav-link-a">Categories</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default NavBar;

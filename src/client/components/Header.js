import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  const authLink = auth ? <a href="/api/logout">Logout</a> : <a href="/api/auth/google">Login</a>;
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo" href="/" to="/">
            React SSR
          </Link>
          <ul className="right">
            <li>
              <Link href="/users" to="/users">
                Users
              </Link>
            </li>
            <li>
              <Link href="/admins" to="/admins">
                Admins
              </Link>
            </li>
            <li>{authLink}</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);

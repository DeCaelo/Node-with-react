import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import styled from 'styled-components';

const Nav = styled.nav`background-color: #1d2028;`;

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <li>
            <a href="/auth/">Loading ...</a>
          </li>
        );
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1" style={{ margin: '10px 10px' }}>
            <Payments />
          </li>,
          <li key="3" style={{ margin: '15px 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <Nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo">
            Emaily
          </Link>

          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </Nav>
    );
  }
}

function mapStateToProps({ auth }) {
  // auth from index.js reducers auth: state.auth
  return { auth };
}

export default connect(mapStateToProps)(Header);

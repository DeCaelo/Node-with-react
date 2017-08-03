import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

const button = {
  margin: '10px',
};

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
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="navbar-brand"
            >
              Emaily
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <button
                type="button"
                className="btn btn-default navbar-btn"
                style={button}
              >
                {this.renderContent()}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  // auth from index.js reducers auth: state.auth
  return { auth };
}

export default connect(mapStateToProps)(Header);

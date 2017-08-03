import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <a className="navbar-brand">Emaily</a>
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

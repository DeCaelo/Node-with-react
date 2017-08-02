import React, { Component } from 'react';
import { connect } from 'react-redux';

const button = {
  margin: '10px',
};

class Header extends Component {
  render() {
    console.log(this.props);
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
                Login With Google
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

import React, { Component } from 'react';

const button = {
  margin: "10px",
};

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">Emaily</a>
          </div>
          <div class="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <button type="button" className="btn btn-default navbar-btn" style={button}>Login With Google</button>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
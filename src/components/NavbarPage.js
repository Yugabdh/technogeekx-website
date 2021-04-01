import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from 'mdbreact';

export default class NavbarPage extends React.Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    return (
      <MDBNavbar dark expand='md' fixed='top' scrolling>
        <div className="container">
            <img src={require("../assets/img/svg/logo-shape-blue.svg")} height="30" 
              className="d-inline-block align-top m-1" alt="logo" />
            <MDBNavbarBrand href='/'>
              <strong>TECHNOGEEKX</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse('mainNavbarCollapse')} />
            <MDBCollapse id='mainNavbarCollapse' isOpen={this.state.collapseID} navbar >
              <MDBNavbarNav left>

                  <MDBNavItem>
                    <MDBNavLink 
                      exact to="/" 
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      Home
                    </MDBNavLink>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBNavLink 
                      to="/blog"
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      Blog
                    </MDBNavLink>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBNavLink 
                      to="/contact"
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBNavLink 
                      to="/about"
                      onClick={this.closeCollapse('mainNavbarCollapse')}
                    >
                      About
                    </MDBNavLink>
                  </MDBNavItem>

              </MDBNavbarNav>
              <MDBNavbarNav right className="navbar-nav nav-flex-icons">
                  <MDBNavItem>
                      <a href="https://twitter.com/technogeekx/" to="_blank" className="nav-link Ripple-parent">
                        <MDBIcon fab icon="twitter" />
                      </a>
                  </MDBNavItem>
                  <MDBNavItem>
                      <a className="nav-link waves-effect waves-light" to="_blank" href="https://www.facebook.com/technogeekx.page">
                          <MDBIcon fab icon="fab fa-facebook-f" />
                      </a>
                  </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </div>
      </MDBNavbar>
    );
  }
}

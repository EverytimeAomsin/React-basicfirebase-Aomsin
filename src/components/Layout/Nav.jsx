import React, { Fragment } from 'react';
import {  MDBNavbar, MDBNavbarBrand,MDBNavLink,MDBIcon,MDBNavItem,MDBNavbarNav } from 'mdbreact';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { MDBBtn } from "mdbreact";


import Routing from '../../container/Routes/index'

class Navbar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    let margintop = {
        margintop: '100px'}
        
    let marginleft = {
        marginleft: '35px'}
    const bggreen = {backgroundColor: '#283B42'}
    const container = {height: 1000}
    return(
      <div>
        <Router>
          <header>
            <MDBNavbar style={bggreen} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand style={{marginLeft: '50px'}} href="/">
              <img src="logoweb.png"  alt="" className="img-thumbnail size1 mgr2" />
                  <strong style={{marginLeft:'12px'}} to="#!">ระบบเซ็กชื่อ</strong>
              </MDBNavbarBrand>
            
     
                <MDBNavbarNav right>
            <MDBNavItem>
          
            </MDBNavItem>
          </MDBNavbarNav>
            </MDBNavbar>
            
          </header>
          <Routing />
        </Router>
       
      </div>
    );
  }
}

export default Navbar;


import React, { Component } from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import './AppNavBar.css';
import logo from '../../img/logo.png'

class AppNavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {isActive:false };
    this.onClickNav = this.onClickNav.bind(this);
  }

  onClickNav(){
    this.setState({isActive:!this.state.isActive})
  }

  render() {
    return (
      <Grid fluid={true} style={{margin: 0, padding: 0}}>
        <Row className='nav'>
          <Col md={2} className='logoHolder'>
            <img src={logo} className='logo' />
          </Col>
          <Col md={7} className='breadcrumbHolder'>
            <h2>Home</h2>
          </Col>
          <Col md={3} className='profileHolder'>
            <div className='profileImg'></div>
            <div className='profileDetailsHolder'>
              <h3>Dr Sally Davis</h3>
              <h3>University College Hospital</h3>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AppNavBar;

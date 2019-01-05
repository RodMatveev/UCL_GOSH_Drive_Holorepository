import React, { Component } from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import './AppNavBar.css';

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
          <Col md={3} className='logoHolder'>
            {'Logo here'}
          </Col>
          <Col md={6}>
            {'Breadcrumb here'}
          </Col>
          <Col md={3} className='profileHolder'>
            {'Profile here'}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AppNavBar;

import React, { Component } from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import './AppNavBar.css';
import logo from '../../img/logo.png';
import doc from '../../img/doc.jpg';
import { HashRouter as Router, Route, Link
 } from "react-router-dom";

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
    const styles = {
      breadcrumb: {
        display: 'flex',
        flexDirection: 'row'
      },
      secondary: {
        marginLeft: 0
      }
    }
    return (
      <Grid fluid={true} style={{margin: 0, padding: 0}}>
        <Row className='nav'>
          <Col md={2} className='logoHolder'>
            <img src={logo} className='logo' />
          </Col>
          <Router>
            <Col md={7} className='breadcrumbHolder'>
              <Route exact path="/" component={() => <Link to={`/`}><h2>Home</h2></Link>} />
              <Route path="/case" component={() => <div style={styles.breadcrumb}><Link to={`/`}><h2>Home&nbsp;&nbsp;&nbsp;</h2></Link><h2 style={styles.secondary}>>&nbsp;&nbsp;&nbsp;Patient</h2></div>} />
            </Col>
          </Router>
          <Col md={3} className='profileHolder'>
            <div className='profileImg'>
              <img src={doc} className='profileImgImg' />
            </div>
            <div className='profileDetailsHolder'>
              <h3><span className="semiText">Dr Sally Davis</span></h3>
              <h3>University College Hospital</h3>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AppNavBar;

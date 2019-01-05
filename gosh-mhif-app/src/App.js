import React, { Component } from 'react';
import logo from './logo.svg';
import Scene from './Scene'
import About from './About'
//import { Container, Box ,Column,Columns,Breadcrumb, BreadcrumbItem} from 'bloomer';
import AppNavBar from './app/Nav/AppNavBar'
import AppSidePanel from './app/AppSidePanel'
import CaseList from './caseList'
import HomeScreen from './HomeScreen'
import CaseView from './CaseView'
import AddAnnotation from './AddAnnotation'
import AddMesh from './AddMesh'
import ApiDocumentation from './ApiDocumentation'
import Add from './Add'
import { HashRouter as Router, Route, Link,Switch
 } from "react-router-dom";
import { Grid, Row, Col, Navbar } from 'react-bootstrap';

class App extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
      // <div className="App">
      //   <div>
      //   <AppNavBar/>
      //   <br/>
      //   <Columns isCentered>
      //
      //     <Column>
      //     <Router basename={process.env.REACT_APP_ROUTER_BASE+"" || ''}>
      //         <Switch>
      //           <Route path="/add/mesh/:id" component={AddMesh} />
      //           <Route path="/add/annotation/:id" component={AddAnnotation} />
      //           <Route path="/about" component={About} />
      //           <Route path="/add" component={Add} />
      //           <Route path="/cases/:id/mesh/:model" component={Scene} />
      //           <Route path="/cases/:id/allmeshes/" component={Scene} />
      //           <Route path="/cases/:id" component={CaseView} />
      //           <Route path="/documentation/" component={ApiDocumentation} />
      //           <Route path="/all" component={CaseList} />
      //           <Route path="/" component={HomeScreen} />
      //         </Switch>
      //       </Router>
      //       </Column>
      //     </Columns>
      //   </div>
      // </div>
      <div className="App">
        <Grid fluid={true} style={{margin: 0, padding: 0}}>
          <Row>
            <Col md={12} style={{backgroundColor: '#FFFFFF'}}>
              <AppNavBar />
            </Col>
          </Row>
          <Row>
            <Col md={3} style={{backgroundColor: '#FFFFFF'}}>
              {'Menu here'}
            </Col>
            <Col md={9} style={{backgroundColor: '#F7F8FA', height: 500}}>
              {'Main content here'}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

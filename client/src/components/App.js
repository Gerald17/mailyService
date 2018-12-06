import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './shared/Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;


class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  };

  render() {
    return (
      <div className='container is-fluid'>
        <Router>
          <React.Fragment>
            <Header/>
            <Route exact path='/' component={Landing}></Route>
            <Route exact path='/dashboard' component={Dashboard}></Route>
            <Route path='/surveys/new' component={SurveyNew}></Route>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ auth }){
  return auth 
}

export default connect(mapStateToProps, actions)(App);

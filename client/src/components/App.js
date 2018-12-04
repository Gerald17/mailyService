import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './shared/Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Route exact path='/' component={Landing}></Route>
            <Route exact path='/surveys' component={Dashboard}></Route>
            <Route path='/surveys/new' component={SurveyNew}></Route>
            <Route path='/header' component={Header}></Route>
          </div>
        </Router>
        <header className="App-header">
          <a
            className="App-link"
            href="http://localhost:5000/auth/google"
            target="_blank"
            rel="noopener noreferrer"
          >
            GOOGLE SIGN IN
          </a>
        </header>
      </div>
    );
  }
}

export default App;

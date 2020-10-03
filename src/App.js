import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Intro } from './intro';
import { Step1 } from './step1';
import { Step2 } from './step2';

import './App.css';


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      graph: undefined,
      k: 3,
      observations: undefined
    };

    this.receiveObservations = this.receiveObservations.bind(this);
  }

  receiveObservations (observations) {
    this.setState({observations: observations});
  }

  render() {
    const { graph, k, observations } = this.state;

    return (
      <div className="demo">
        <header className="sticky">
          K-means Clustering Visualization
        </header>
        <Router>
          <Switch>
            <Route path="/step1"><Step1 graph={graph} observations={observations} callback={this.receiveObservations}/></Route>
            <Route path="/step2"><Step2 k={k} /></Route>
            <Route path="/step3">Step3</Route>
            <Route><Intro /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

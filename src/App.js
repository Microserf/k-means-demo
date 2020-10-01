import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Intro } from './intro';
import { Step1 } from './step1';

import './App.css';


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      graph: undefined,
      iterations: 5,
      k: 3,
      observations: undefined
    };

    this.receiveObservations = this.receiveObservations.bind(this);
  }

  receiveObservations (observations) {
    this.setState({observations: observations});
  }

  render() {
    const { iterations, graph, k, observations } = this.state;

    return (
      <div className="demo">
        <header className="sticky">
          K-means Clustering Visualization
        </header>
        <Router>
          <Switch>
            <Route path="/step1"><Step1 graph={graph} observations={observations} k={k} iterations={iterations} callback={this.receiveObservations}/></Route>
            <Route path="/step2">Step2</Route>
            <Route path="/step3">Step3</Route>
            <Route><Intro /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

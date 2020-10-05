import React, { Component } from 'react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

import { Intro } from './intro';
import { Step1 } from './step1';
import { Step2 } from './step2';

import './App.css';


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      concern: undefined,
      graph: undefined,
      k: 3,
      name: undefined,
      observations: undefined
    };

    this.receiveState = this.receiveState.bind(this);
  }

  receiveState (name, value) {
    this.setState({[name]: value});
  }

  render() {
    const { concern, graph, k, name, observations } = this.state;

    return (
      <div className="demo">
        <header>
          K-means Clustering Demo
        </header>
        <MemoryRouter>
          <Switch>
            <Route path="/step1"><Step1 name={name} concern={concern} graph={graph} observations={observations} callback={this.receiveObservations}/></Route>
            <Route path="/step2"><Step2 k={k} /></Route>
            <Route path="/step3">Step3</Route>
            <Route><Intro callback={this.receiveState}/></Route>
          </Switch>
        </MemoryRouter>
      </div>
    );
  }
}

export default App;

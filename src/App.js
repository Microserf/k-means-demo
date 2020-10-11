import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Intro } from './cards/intro';
import { SelfIdentification } from './cards/self-id';
import { Step2 } from './cards/step2';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="demo">
        <HashRouter>
          <Switch>
            <Route path="/who_do_you_think_you_are_and_how_dare_you"><SelfIdentification/></Route>
            <Route path="/step2"><Step2/></Route>
            <Route path="/step3">Step3</Route>
            <Route><Intro /></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;

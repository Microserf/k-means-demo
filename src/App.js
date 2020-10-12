import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Intro } from './cards/intro';
import { SelfIdentification } from './cards/self-id';
import { StoryPart1 } from './cards/story-1';
import { StoryPart2 } from './cards/story-2';
import { GenerateObservations } from './cards/observations';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="demo">
        <HashRouter>
          <Switch>
            <Route path="/who_do_you_think_you_are_and_how_dare_you"><SelfIdentification/></Route>
            <Route path="/ok_whatever"><StoryPart1/></Route>
            <Route path="/hows_business"><StoryPart2/></Route>
            <Route path="/observations"><GenerateObservations/></Route>
            <Route><Intro /></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;

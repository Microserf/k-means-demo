import React, { Component } from 'react';
import { KMeansCanvas } from './d3-canvas';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="demo">
        <header>
          k-means Clustering Demo
        </header>
        <hr />
        <KMeansCanvas />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { KMeansCanvas, KMeansObservationControls } from './d3-canvas';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="demo">
        <header>
          K-means Clustering Visualization
        </header>
        <hr />
        <div className="intro">
          <p>The <a href="https://en.wikipedia.org/wiki/K-means_clustering">K-means Clustering algorithm</a> is used to group observations (data points) into distinct groupings, or clusters. This visualization will help you understand the steps the algorithm takes to partition (divide) the observations into a given number (<em>k</em>) of clusters.</p>

          <p>First, let's create a fictitious set of observations. These are observations about the wealth of various celebrities. Below is a <a href="https://en.wikipedia.org/wiki/Scatter_plot">scatter plot</a> of these observations. The x-axis represents age (0 to 100), while the y-axis represents wealth (0 to $1,000,000).</p>
        </div>
        <KMeansObservationControls />
        <KMeansCanvas />
      </div>
    );
  }
}

export default App;

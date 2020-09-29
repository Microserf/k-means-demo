import React, { Component } from 'react';
import { KMeansCanvas, KMeansAlgorithmControls, ObservationControls } from './d3-canvas';
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

    this.receiveObservations = this.receiveObservations.bind(this)
  }

  receiveObservations (observations) {
    this.setState({observations: observations});
  }

  render() {
    return (
      <div className="demo">
        <header className="sticky">
          K-means Clustering Visualization
        </header>
        <div className="explanation">
          <p>The <a href="https://en.wikipedia.org/wiki/K-means_clustering">K-means Clustering algorithm</a> is used to group observations (data points) into distinct groupings, or clusters. This visualization will help you understand the steps the algorithm takes to partition (divide) the observations into a given number (<em>k</em>) of clusters.</p>

          <p>First, let's create a fictitious set of observations. These are observations about the wealth of various celebrities. Below is a <a href="https://en.wikipedia.org/wiki/Scatter_plot">scatter plot</a> of these observations. The x-axis represents age (0 to 100), while the y-axis represents wealth (0 to $1,000,000).</p>
        </div>

        <ObservationControls ageRange={100} wealthRange={1000000} callback={this.receiveObservations}/>
        <KMeansCanvas graph={this.state.graph} ageRange={100} wealthRange={1000000} observations={this.state.observations} />

        <div className="explanation">
          <p>Now that we have some observations to work with, let's start looking at k-means in action! The first thing we need to do is specify the value of <em>k</em> (how many clusters do we want to create?), as well as the number of <em>iterations</em> (how many times do we want the algorithm to refine its solution?).</p>
        </div>

        <KMeansAlgorithmControls k={this.state.k} iterations={this.state.iterations} />

        <div className="explanation">
          <div className="step">
            <h3>Step 1: Random assignment</h3>
            <p>First, all of the observations are randomly paritioned into <em>k</em> clusters.</p>
          </div>

          <div className="step">
            <h3>Step 2: Update centroids</h3>
            <p>Now that we have <em>k</em> random clusters, let's calculate the geometric centers (or <em>centroids</em>).</p>
          </div>

          <div className="step">
            <h3>Step 3: Re-assign the observations</h3>
            <p>Based on our updated centroids, let's now re-assign each observation to the nearest centroid.</p>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

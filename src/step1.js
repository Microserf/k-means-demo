import React, { Component } from 'react';

import {ObservationControls, KMeansCanvas, KMeansAlgorithmControls} from './d3-canvas';


export class Step1 extends Component {
  render () {
    const { callback, graph, iterations, k, observations } = this.props;

    return (
      <div>
        <p>These are observations about the wealth of various celebrities. Below is a <a href="https://en.wikipedia.org/wiki/Scatter_plot">scatter plot</a> of these observations. The x-axis represents age (0 to 100), while the y-axis represents wealth (0 to $1,000,000).</p>

        <ObservationControls ageRange={100} wealthRange={1000000} callback={callback}/>
        <KMeansCanvas graph={graph} ageRange={100} wealthRange={1000000} observations={observations} />

        <div className="explanation">
          <p>Now that we have some observations to work with, let's start looking at k-means in action! The first thing we need to do is specify the value of <em>k</em> (how many clusters do we want to create?), as well as the number of <em>iterations</em> (how many times do we want the algorithm to refine its solution?).</p>
        </div>

        <KMeansAlgorithmControls k={k} iterations={iterations} />

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

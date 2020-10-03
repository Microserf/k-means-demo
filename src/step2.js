import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { KMeansAlgorithmControls } from './d3-canvas';


export class Step2 extends Component {
  render () {
    const { k } = this.props;

    return (
      <div>
        <p>Now that we have some observations to work with, let's look at k-means in action! The first thing we need to do is specify the value of <em>k</em> (how many clusters do we want to create?).</p>

        <KMeansAlgorithmControls k={k} />

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

        <Link to="/step3">Next</Link>
      </div>
    );
  }

}


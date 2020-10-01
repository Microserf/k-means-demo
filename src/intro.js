import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export class Intro extends Component {
  render () {
    return (
      <div>
        <div className="explanation">
          <p>The <a href="https://en.wikipedia.org/wiki/K-means_clustering">K-means Clustering algorithm</a> is used to group observations (data points) into distinct groupings, or clusters. This visualization will help you understand the steps the algorithm takes to partition (divide) the observations into a given number (<em>k</em>) of clusters.</p>

          <p>First, let's create a fictitious set of observations. <Link to="/step1">Next</Link></p>
        </div>
      </div>
    );
  }
}

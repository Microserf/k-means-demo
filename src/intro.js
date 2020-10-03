import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export class Intro extends Component {
  render () {
    return (
      <div>
        <div className="explanation">
          <p>The <a href="https://en.wikipedia.org/wiki/K-means_clustering">K-means Clustering algorithm</a> is used to group observations (data points) into distinct groupings, or clusters. This visualization will help you understand the steps the algorithm takes to partition (divide) the observations into a given number (<em>k</em>) of clusters.</p>

          <p>The letter <em>k</em> is used to denote a constant, a fixed number of clusters that the algorithm will seek to create. It is used to represent a <em>constant</em>, because the letter <em>c</em> is already used to represent the speed of light (think <em>e=mc2</em>). So <em>k</em> represents a "konstant".</p>

          <p><em>means</em> means averages. When we look to create <em>k</em> clusters (let's suppose k=6), we are looking to create 6 clusters. Clusters are represented with <em>centroids</em>. <em>Centroids</em> are points on a plane (surface). All of the observations are grouped into clusters, based on how close they are to the nearest <em>centroid</em>.</p>

          <p>This will all become apparent in this demo.</p>

          <p>First, we'll need to create a set of fictitious observations. <Link to="/step1">Next</Link></p>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export class Intro extends Component {
  render () {
    return (
      <div>
        <p>This demo will show you how the <a href="https://en.wikipedia.org/wiki/K-means_clustering">K-means Clustering algorithm</a> works.</p>

        <p>To get started, I just have one question for you...</p>

        <h3 className="showstopper">Who do you think you are?</h3>

      </div>
    );
  }
}

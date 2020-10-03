import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {ObservationControls, KMeansCanvas } from './d3-canvas';


export class Step1 extends Component {
  render () {
    const { callback, graph, observations } = this.props;

    return (
      <div>
        <p>You are in charge of conducting a study of various celebrities, and putting together data on their ages and wealths.</p>




        <p>In this set of observations, celebrities have ages (0 to 100) and wealths that range from $0 to $1M ($1,000,000). Some celebrities are extremely young (1 year old) but already have trust funds worth $998,012! Other celebrities are older (99 years old) and are destitute, having only $22 in their bank accounts.</p>

        <p>We'll graph these observations on a <a href="https://en.wikipedia.org/wiki/Scatter_plot">scatter plot</a>. The x (horizontal) axis represents age, while the y (vertical) axis represents wealth. You can hover over any observation (circle) in the graph to see the details of this particular celebrity.</p>

        <ObservationControls ageRange={100} wealthRange={1000000} callback={callback}/>
        <KMeansCanvas graph={graph} ageRange={100} wealthRange={1000000} observations={observations} />

        <Link to="/step2">Next</Link>
      </div>
    );
  }
}

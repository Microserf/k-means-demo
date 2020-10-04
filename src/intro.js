import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

export class Intro extends Component {
  constructor () {
    super();

    this.state = {
      name: undefined,
      concern: undefined
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name,
          value = event.target.value;

    this.setState({[name]: value});
  }

  render () {
    return (
      <div className="step-intro">
        <p>This demo will show you how the <a href="https://en.wikipedia.org/wiki/K-means_clustering">K-means Clustering algorithm</a> works.</p>

        <p>But before we get started, I just have one question for you...</p>

        <h3 className="showstopper">Who do you think you are?</h3>
        <div className="self-identification">
          My name is
          <select defaultValue="" name="name" value={this.state.name} onChange={this.handleChange}>
            <option value="" disabled></option>
            <option>Alannah</option>
            <option>Benton</option>
          </select>
          and I run
          <select defaultValue="" name="concern" value={this.state.concern} onChange={this.handleChange}>
            <option value="" disabled></option>
            <option>a nail factory!</option>
            <option>a bakery!</option>
          </select>
        </div>
        <div className="continue">
          <Button variant="contained" disabled={(this.state.name == null || this.state.concern == null)}>Continue</Button>
        </div>
      </div>
    );
  }
}

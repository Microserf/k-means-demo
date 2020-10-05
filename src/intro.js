import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Button from '@material-ui/core/Button';

export class Intro extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: undefined,
      concern: undefined
    }

    this.handleChange = this.handleChange.bind(this);
    this.upstreamReceiver = props.callback;
  }

  handleChange(event) {
    const name = event.target.name,
          value = event.target.value;

    this.setState({[name]: value}, () => this.upstreamReceiver(name, value));
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
          and I
          <select defaultValue="" name="concern" value={this.state.concern} onChange={this.handleChange}>
            <option value="" disabled></option>
            <option value="hardware">own a hardware store.</option>
            <option value="yachts">make yachts.</option>
          </select>
        </div>
        <div className="continue">
          <LinkContainer to="/step1" disabled={(this.state.name == null || this.state.concern == null)}>
            <Button variant="contained">Continue</Button>
          </LinkContainer>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {ObservationControls, KMeansCanvas } from './d3-canvas';


export class Step1 extends Component {
  concernPhrases = {
    'hardware': 'owns a hardware store',
    'yachts': 'builds yachts'
  };


  render () {
    const { name, concern } = this.props;
    const concernPhrase = this.concernPhrases[concern];

    return (
      <div>
        <p>Ok, {name} who {concernPhrase}... (if that is your real name...)</p>
      </div>
    );
  }
}

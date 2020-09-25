import React, { Component } from 'react';
import * as d3 from "d3";

export class ObservationControls extends Component {
  render () {
    const { observationCount, clusterGravity, callback } = this.props;

    return (
      <div className="observation-controls controls">
        <h3 className="header">Observations</h3>
        <label>How many? <select name="observationCount" id="observationCount" value={observationCount} onChange={callback}>
          <option>10</option>
          <option>50</option>
          <option>100</option>
          <option>500</option>
        </select></label>

        <label>Distribute how? <select name="clusterGravity" id="clusterGravity" value={clusterGravity} onChange={callback}>
          <option value={0}>Random (no clusters)</option>
          <option value={0.6}>Weakly clustered</option>
          <option value={0.8}>Strongly clustered</option>
        </select></label>
      </div>
    )
  }
}

export class KMeansAlgorithmControls extends Component {
  render () {
    const { k, iterations, callback } = this.props;

    return (
      <div className="kmeans-controls controls">
        <h3 className="header">K-Means Algorithm</h3>
        <label>How many clusters (<em>k</em>)? <select name="k" id="k" value={k} onChange={callback}>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select></label>

        <label>How many refinements (<em>iterations</em>)? <select name="iterations" id="iterations" value={iterations} onChange={callback}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select></label>
      </div>
    )
  }
}


export class KMeansCanvas extends Component {
  constructor (props) {
    super(props);

    this.graph = null;
  }

  componentDidMount () {
    const { observationCount, clusterGravity } = this.props;
    this.graph = new KMeansGraph(observationCount, clusterGravity);
  }

  componentDidUpdate () {
    const { observationCount, clusterGravity } = this.props;
    this.graph.updateObservations(observationCount, clusterGravity);
  }

  render() {
    return (
      <div className="canvas sticky">
        <svg id="k-means-graph" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" />
      </div>
    )
  }
}

class KMeansGraph {
  constructor(observationCount, clusterGravity) {
    this.svg = this.setUpSVG();

    this.width = 1000;
    this.height = 500;

    this.ageRange = 100
    this.wealthRange = 100

    this.updateObservations(observationCount, clusterGravity);
  }

  setUpSVG () {
    const svg = d3
      .select("svg#k-means-graph")
        .style("user-select", "none");

    return svg;
  }

  generateObservations (observationCount, clusterGravity) {
    const randomInteger = range => Math.floor(Math.random() * range);
    const self = this;

    var clusterCentroids;
    if (clusterGravity > 0) {
      clusterCentroids = this.generateObservations(3 + randomInteger(3), 0);  // will generate between 3 and 5 clusters
    }

    function makeObservation () {
      var age = randomInteger(self.ageRange),
          wealth = randomInteger(self.wealthRange);

      if (clusterGravity > 0) {
        var randomCentroid = clusterCentroids[randomInteger(clusterCentroids.length)];

        age = age + (clusterGravity * (randomCentroid.age - age));
        wealth = wealth + (clusterGravity * (randomCentroid.wealth - wealth));
      }

      return { age: age, wealth: wealth};
    }

    return d3.range(0, observationCount).map(makeObservation);
  }

  updateObservations (observationCount, clusterGravity) {
    this.observations = this.generateObservations(observationCount, clusterGravity);
    this.updateDisplay()
  }

  updateDisplay () {
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var x = d3.scaleLinear()
        .range([0, this.width])
        .domain([0, this.ageRange]).nice();

    var y = d3.scaleLinear()
        .range([0, this.height])
        .domain([0, this.wealthRange]).nice();

    var nodes = this.svg
      .selectAll(".dot")
        .data(this.observations)
        .attr("cx", function(d) { return x(d.age); })
        .attr("cy", function(d) { return y(d.wealth); });

    nodes
      .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 3)
        .attr("cx", function(d) { return x(d.age); })
        .attr("cy", function(d) { return y(d.wealth); })
        .attr("stroke", "black")
        .attr("fill", function(d) { return ( d.cluster == null ? "none" : color(d.cluster) ); });

    nodes
      .exit().remove();
  }
}

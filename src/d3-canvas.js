import React, { Component } from 'react';
import * as d3 from "d3";

export class ObservationControls extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clusterGravity: 0.6,
      observationCount: 500,
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateObservations();
  }

  generateObservations (observationCount, clusterGravity) {
    const randomInteger = range => Math.floor(Math.random() * range);
    const {ageRange, wealthRange} = this.props;

    var clusterCentroids;
    if (clusterGravity > 0) {
      clusterCentroids = this.generateObservations(2 + randomInteger(5), 0);  // will generate between 3 and 5 clusters
    }

    function makeObservation () {
      var age = randomInteger(ageRange),
          wealth = randomInteger(wealthRange);

      if (clusterGravity > 0) {
        var randomCentroid = clusterCentroids[randomInteger(clusterCentroids.length)];

        age = age + ((Math.random(clusterGravity / 2) + (clusterGravity / 2)) * (randomCentroid.age - age));
        wealth = wealth + ((Math.random(clusterGravity / 2) + (clusterGravity / 2)) * (randomCentroid.wealth - wealth));
      }

      return { age: age, wealth: wealth};
    }

    return d3.range(0, observationCount).map(makeObservation);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    }, this.updateObservations);
  }

  updateObservations () {
    this.observations = this.generateObservations(this.state.observationCount, this.state.clusterGravity);
    this.props.callback(this.observations);
  }

  render () {
    return (
      <div className="observation-controls controls">
        <h3 className="header">Observations</h3>
        <label>How many? <select name="observationCount" id="observationCount" value={this.state.observationCount} onChange={this.handleChange}>
          <option>10</option>
          <option>50</option>
          <option>100</option>
          <option>500</option>
        </select></label>

        <label>Distribute how? <select name="clusterGravity" id="clusterGravity" value={this.state.clusterGravity} onChange={this.handleChange}>
          <option value={0}>Random (no clusters)</option>
          <option value={0.6}>Weakly clustered</option>
          <option value={1}>Strongly clustered</option>
        </select></label>
      </div>
    )
  }
}

export class KMeansAlgorithmControls extends Component {
  render () {
    const { k, iterations, callback=()=>{} } = this.props;

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
    this.graph = new KMeansGraph(this.props);
  }

  componentDidUpdate () {
    this.graph.setObservations(this.props.observations);
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
  constructor({ageRange, wealthRange, observations}) {
    this.svg = this.setUpSVG();
    this.width = 1000;
    this.height = 500;

    this.ageRange = ageRange;
    this.wealthRange = wealthRange;
    this.setObservations(observations);
  }

  setObservations (observations) {
    this.observations = observations;
    if (this.observations != null) {
      this.updateDisplay();
    }
  }

  setUpSVG () {
    const svg = d3
      .select("svg#k-means-graph")
        .style("user-select", "none");

    return svg;
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

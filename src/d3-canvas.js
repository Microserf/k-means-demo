import React, { Component } from 'react';
import * as d3 from "d3";


export class KMeansCanvas extends Component {

  componentDidMount () {
    this.setState({graph: new KMeansGraph()})
  }

  render() {
    return (
      <div className="canvas">
        <div className="observation-controls">
          <h3 className="header">Observations</h3>
          <label>How many? <select name="observation-count" id="observation-count">
            <option>100</option>
            <option>500</option>
            <option>1000</option>
          </select></label>

          <label>Create clusters? <select name="observation-clusters" id="observation-clusters">
            <option>No</option>
            <option>Yes</option>
          </select></label>
        </div>
        <svg id="k-means-graph" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" />
      </div>
    )
  }
}

class KMeansGraph {
  constructor(callback) {
    this.svg = this.setUpSVG();

    this.width = 1000;
    this.height = 500;

    this.xDomain = 100
    this.yDomain = 1000000
    this.observationCount = 300
    this.observations = this.generateObservations();

    this.doVisualization()
  }

  setUpSVG () {
    const svg = d3
      .select("svg#k-means-graph")
        .style("user-select", "none");

    return svg;
  }

  generateObservations () {
    const randomRange = range => Math.floor(Math.random() * range);

    return d3.range(0, this.observationCount)
      .map( d => ({ age: randomRange(this.xDomain), followers: randomRange(this.yDomain)}))
  }

  doVisualization () {
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var x = d3.scaleLinear()
        .range([0, this.width])
        .domain([0, this.xDomain]).nice();

    var y = d3.scaleLinear()
        .range([0, this.height])
        .domain([0, this.yDomain]).nice();

    this.svg
      .selectAll(".dot")
        .data(this.observations)
      .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 3)
        .attr("cx", function(d) { return x(d.age); })
        .attr("cy", function(d) { return y(d.followers); })
        .attr("stroke", "black")
        .attr("fill", function(d) { return ( d.cluster == null ? "none" : color(d.cluster) ); });
  }
}

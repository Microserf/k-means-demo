import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

import { setConcern, setName } from './actions';

import Button from '@material-ui/core/Button';


export const Intro = props => {
  const name = useSelector(state => state.name),
        concern = useSelector(state => state.concern),
        dispatcher = useDispatch(),
        isContinuable = (name != null && concern != null);

  return (
    <div className="step-intro">
      <p>This demo will show you how the <a href="https://en.wikipedia.org/wiki/K-means_clustering">K-means Clustering algorithm</a> works.</p>

      <p>But before we get started, I just have one question for you...</p>

      <h3 className="showstopper">Who do you think you are?</h3>
      <div className="self-identification">
        My name is
        <select defaultValue="" name="name" value={name} onChange={(s) => {dispatcher(setName(s.target.value))}}>
          <option value="" disabled></option>
          <option>Alannah</option>
          <option>Benton</option>
        </select>
        and I
        <select defaultValue="" name="concern" value={concern} onChange={(s) => {dispatcher(setConcern(s.target.value))}}>
          <option value="" disabled></option>
          <option value="hardware">own a hardware store.</option>
          <option value="yachts">make yachts.</option>
        </select>
      </div>
      <div className="continue">
        <LinkContainer to="/step1">
          <Button disabled={!isContinuable} variant="contained">Continue</Button>
        </LinkContainer>
      </div>
    </div>
  );
}

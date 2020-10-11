import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

import { setPersonaDetail } from '../actions';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import Button from '@material-ui/core/Button';


export const SelfIdentification = props => {
  const name = useSelector(state => state.name),
        concern = useSelector(state => state.concern),
        dispatch = useDispatch(),
        isContinuable = (name != null && concern != null);

  const handleChange = (event) => {
    const target = event.target,
          type = target.name,
          value = target.value;

    dispatch(setPersonaDetail(type, value));
  }

  return (
    <div className="self-identification">
      <header>
        Who do you think you are?
      </header>

      <div className="inline-question">
        My name is...
        <FormControl component="fieldset">
          <RadioGroup aria-label="name" name="name" value={name || null} onChange={handleChange}>
            <FormControlLabel control={<Radio />} value="Alannah" label="Alannah" />
            <FormControlLabel control={<Radio />} value="Benton" label="Benton" />
          </RadioGroup>
        </FormControl>

        ...and I...

        <FormControl component="fieldset">
          <RadioGroup aria-label="concern" name="concern" value={concern || null} onChange={handleChange}>
            <FormControlLabel control={<Radio />} value="hardware" label="own a hardware store." />
            <FormControlLabel control={<Radio />} value="yachts" label="build yachts." />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="continue">
        <LinkContainer to="/ok_whatever">
          <Button disabled={!isContinuable} variant="contained">Honest!</Button>
        </LinkContainer>
      </div>
    </div>
  )
}

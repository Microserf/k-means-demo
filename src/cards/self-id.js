import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Button from '@material-ui/core/Button';

import { setPersonaDetail } from '../actions';


const ButtonRadio = props => {
  const { type, value, label, isSelected, ...rest } = props;

  return (
    <Button variant="contained" color={isSelected ? "primary" : undefined} {...rest}>
      {label || value}
    </Button>
  )
}


export const SelfIdentification = props => {
  const name = useSelector(state => state.name),
        job = useSelector(state => state.job),
        dispatch = useDispatch(),
        isContinuable = (name != null && job != null);

  const handleClick = (type, value) => {
    return () => dispatch(setPersonaDetail(type, value));
  }

  return (
    <div className="self-identification">
      <header>
        Who do you think you are?
      </header>

      My name is...

      <div className="name-choices">
        <ButtonRadio type="name" isSelected={name === 'Alannah'} value="Alannah" onClick={handleClick('name', 'Alannah')}/>
        <ButtonRadio type="name" isSelected={name === 'Benton'} value="Benton" onClick={handleClick('name', 'Benton')} />
      </div>

      ...and I...

      <div className="job-choices">
        <ButtonRadio type="job" isSelected={job === 'hardware'} value="hardware" label="own a hardware store." onClick={handleClick('job', 'hardware')} />
        <ButtonRadio type="job" isSelected={job === 'archaeologist'} value="archaeologist" label="am an archaeologist." onClick={handleClick('job', 'archaeologist')} />
      </div>

      <div className="continue">
        <LinkContainer to="/hows_business">
          <Button disabled={!isContinuable} variant="contained">Honest!</Button>
        </LinkContainer>
      </div>
    </div>
  )
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

import { setConcern, setName } from '../actions';
import Button from '@material-ui/core/Button';


export const SelfIdentification = props => {
  const name = useSelector(state => state.name),
        concern = useSelector(state => state.concern),
        dispatcher = useDispatch(),
        isContinuable = (name != null && concern != null);

  return (
    <div className="self-identification">
      <header>
        Who do you think you are?
      </header>

      My name is
      <select name="name" value={name} onChange={(s) => {dispatcher(setName(s.target.value))}}>
        <option>Alannah</option>
        <option>Benton</option>
      </select>
      and I
      <select name="concern" value={concern} onChange={(s) => {dispatcher(setConcern(s.target.value))}}>
        <option value="hardware">own a hardware store.</option>
        <option value="yachts">make yachts.</option>
      </select>

      <div className="continue">
        <LinkContainer to="/ok_whatever">
          <Button disabled={!isContinuable} variant="contained">...</Button>
        </LinkContainer>
      </div>
    </div>
  )
}

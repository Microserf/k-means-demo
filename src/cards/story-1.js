import React from 'react';

import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Button from '@material-ui/core/Button';


const CONCERN_PHRASES = {
  hardware: 'own a hardware store.',
  yachts: 'build yachts'
}

export const StoryPart1 = (props) => {
  const name = useSelector(state => state.name),
        concern = useSelector(state => state.concern),
        concernPhrase = CONCERN_PHRASES[concern];

  return (
    <div className="lecture">
      <header>
        Well, ok...
      </header>

      <p>To be fully transparent, I don't fully believe that your name is {name} and that you {concernPhrase}, but let's overlook that for now...</p>

      <p>I promised I would teach you how to cluster data using the K-Means algorithm, and even though you've proven yourself to be less-than-honest, I will nevertheless maintain my end of the bargain.</p>

      <div className="continue">
        <LinkContainer to="/hows_business">
          <Button variant="contained">Thank you for overlooking my flawed character</Button>
        </LinkContainer>
      </div>

    </div>
  );
}

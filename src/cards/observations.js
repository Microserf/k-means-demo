import React from 'react';

import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';


export const GenerateObservations = (props) => {
  const name = useSelector(state => state.name),
        concern = useSelector(state => state.concern),
        progress = 50;

  return (
    <div className="lecture">
      <header>
        Let's collect some data...
      </header>

      { concern === 'hardware' &&
        <p>The first thing we'll need to do is figure out where to put our new store. Since we have customers traveling from quite a ways away, it would be a good idea to place our new store where it's convenient to them.</p>
      }
      { concern === 'hardware' &&
        <p>So, {name}, you're going to have to do a little market research. Why don't you ask 500 customers, at check-out, where they live? I'm sure they'll be super psyched to give out their personal details when they're buying a new set of batteries.</p>
      }
      { concern === 'hardware' &&
        <div className="data-collection">
          <LinearProgress variant="determinate" value={progress} />
          <Button variant="contained">Poll customers</Button>
        </div>
      }

      { concern === 'yachts' &&
        <p>Business at the boatyard hasn't been too hot lately. People just aren't buying yachts like they used to.</p>
      }
      { concern === 'yachts' &&
        <p>Sadly, it looks like you've got to downsize your business. .</p>
      }

      <div className="continue">
        <LinkContainer to="/observations">
          <Button variant="contained">Great!</Button>
        </LinkContainer>
      </div>

    </div>
  );
}

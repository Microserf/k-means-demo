import React from 'react';

import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Button from '@material-ui/core/Button';


export const StoryPart2 = (props) => {
  const job = useSelector(state => state.job);

  return (
    <div className="lecture">
      <header>
        How's business?
      </header>

      { job === 'hardware' &&
        <p>Business at the hardware store has been booming! Since opening your shop two years ago, you've built a growing base of loyal customers. Some of your customers travel up to two hours to get to your store, because of your service and expertise.</p>
      }
      { job === 'hardware' &&
        <p>In fact, you've got so much revenue coming in that you think it's time to expand to a second location.</p>
      }

      <div className="continue">
        <LinkContainer to="/observations">
          <Button variant="contained">Great!</Button>
        </LinkContainer>
      </div>

    </div>
  );
}

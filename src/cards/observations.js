import React from 'react';

import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';


export const GenerateObservations = (props) => {
  const name = useSelector(state => state.name),
        job = useSelector(state => state.job);

  const [progress, setProgress] = React.useState(0);

  function pollCustomers () {
    const maxProgress = 499;

    const progress = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= maxProgress) {
          clearInterval(progress);
          return prevProgress
        } else {
          return Math.min(maxProgress, prevProgress + Math.floor(Math.random() * 10))
        }
      })
    }, 100);
  }

  return (
    <div className="lecture">
      <header>
        Let's collect some data...
      </header>

      { job === 'hardware' &&
        <p>The first thing we'll need to do is figure out where to put our new store. Since we have customers traveling from quite a ways away, it would be a good idea to place our new store where it's convenient to them.</p>
      }
      { job === 'hardware' &&
        <p>So, {name}, you're going to have to do a little market research. Why don't you ask 500 customers, at check-out, where they live? I'm sure they'll be <em>super psyched</em> to give out their personal details when they're buying a new set of batteries!</p>
      }
      { job === 'hardware' &&
        <div className="data-collection">
          <LinearProgressWithLabel maxValue={500} value={progress} />
          <Button variant="contained" disabled={progress > 0} onClick={pollCustomers}>{progress > 0 ? "Harassing customers..." : "Poll customers"}</Button>

          { progress === 499 &&
            <div className="the-fellmer-situation">
              <p>Uh-oh! Old Ms. Fellmer is refusing to provide her address! Do you want to proceed with only 499 customer addresses, or tackle her and search her purse for the 500th customer address?</p>

              <div>
                <LinkContainer to="/community_service">
                  <Button variant="contained">Tackle Ms. Fellmer</Button>
                </LinkContainer>
                <LinkContainer to="/mapping">
                  <Button variant="contained">Continue with only 499 data points</Button>
                </LinkContainer>
              </div>
            </div>
          }
        </div>
      }
    </div>
  );
}

function LinearProgressWithLabel(props) {
  const { maxValue, value, ...rest } = props,
        progessValue = value / (maxValue || 100) * 100;

  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" value={progessValue} {...rest} />
      </Box>
      <Box minWidth={60}>
        <Typography variant="body2" color={value === maxValue - 1 ? "error" : "textSecondary"}>{`${value} / ${maxValue}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

import React from 'react';

import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';


export const GenerateObservations = (props) => {
  const name = useSelector(state => state.name),
        concern = useSelector(state => state.concern);

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

      { concern === 'hardware' &&
        <p>The first thing we'll need to do is figure out where to put our new store. Since we have customers traveling from quite a ways away, it would be a good idea to place our new store where it's convenient to them.</p>
      }
      { concern === 'hardware' &&
        <p>So, {name}, you're going to have to do a little market research. Why don't you ask 500 customers, at check-out, where they live? I'm sure they'll be <em>super psyched</em> to give out their personal details when they're buying a new set of batteries!</p>
      }
      { concern === 'hardware' &&
        <div className="data-collection">
          <LinearProgressWithLabel maxValue={500} value={progress} />
          <Button variant="contained" onClick={pollCustomers}>Poll customers</Button>
        </div>
      }

      { concern === 'yachts' &&
        <p>Business at the boatyard hasn't been too hot lately. People just aren't buying yachts like they used to.</p>
      }
      { concern === 'yachts' &&
        <p>Sadly, it looks like you've got to downsize your business. .</p>
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
        <Typography variant="body2" color="textSecondary">{`${value} / ${maxValue}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

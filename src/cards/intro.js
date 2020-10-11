import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

import Button from '@material-ui/core/Button';


export const Intro = props => {
  return (
    <div className="step-intro">
      <header>
        K-Means Clustering Demo
      </header>

      <p>Hi and welcome!</p>

      <p>I'm going to teach you all about clustering data. We're going to do that using an algorithm (a math recipe) called <a href="https://en.wikipedia.org/wiki/K-means_clustering">K-Means</a>. It might sound scary, but it's really not, and I'll show you how it works. You won't even need a calculator!</p>

      <p>There's just one tiny question I have for you before we get started...</p>

      <div className="continue">
        <LinkContainer to="/who_do_you_think_you_are_and_how_dare_you">
          <Button variant="contained">Sure, what is it?</Button>
        </LinkContainer>
      </div>
    </div>
  );
}

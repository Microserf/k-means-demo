import React from 'react';
import { useDispatch, useSelector } from 'react-redux'


export const Step1 = props => {
  const name = useSelector(state => state.name),
        concernPhrase = useSelector(state => getConcernPhrase(state.concern)),
        dispatcher = useDispatch();

  function getConcernPhrase(concern) {
    switch (concern) {
      case 'hardware':
        return 'runs a hardware store.'

      case 'yachts':
        return 'builds yachts.'

      default:
        return ''

    }
  }

  return (
    <div>
      <p>Ok, {name} who {concernPhrase}... (if that is your real name...)</p>
    </div>
  );
}

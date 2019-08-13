import React from 'react';
import { historyPush } from '../Router';
import PropTypes from 'prop-types';

export function Link(props) {
  const handleClick = (event) => {
    event.preventDefault();
    historyPush(props.to);
  };
  return (
    <a className='navigation-buttom' href={props.to} onClick={handleClick}>
      {props.children}
    </a>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired
}


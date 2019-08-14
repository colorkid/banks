import React from 'react';
import { historyPush } from '../Router';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Url } from './TextComponents';

export function Link(props) {
  const handleClick = (event) => {
    event.preventDefault();
    historyPush(props.to);
  };
  return (
    <Url href={props.to} onClick={handleClick}>{props.children}</Url>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired
}

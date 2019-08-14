import React from 'react';
import { historyPush } from '../Router';
import PropTypes from 'prop-types';
import styled from 'styled-components'

export function Link(props) {
  const handleClick = (event) => {
    event.preventDefault();
    historyPush(props.to);
  };
  return (
    <A href={props.to} onClick={handleClick}>{props.children}</A>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired
}

const A = styled.a`
  wtext-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 28px;
  margin: 10px 0;
  color: #fff;
  background-color: #27aedb;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    background-color: #209cc5;
  }
`;

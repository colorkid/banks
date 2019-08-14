import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

export function Search(props) {
  return (
    <Input placeholder={props.placeholder} type='search' onKeyUp={props.findBank}></Input>
  )
}

Search.propTypes = {
  findBank: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

const Input = styled.input`
  width: 100%;
  height: 28px;
  padding-left: 10px;
`;
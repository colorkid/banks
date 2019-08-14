import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

export function SearchInput(props) {
  return (
    <Input placeholder={props.placeholder} type='search' onKeyUp={props.findCallback}></Input>
  )
}

SearchInput.propTypes = {
  findCallback: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

const Input = styled.input`
  width: 100%;
  height: 28px;
  padding-left: 10px;
`;
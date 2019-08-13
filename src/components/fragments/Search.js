import React from 'react';
import PropTypes from 'prop-types';

export function Search(props) {
  return (
    <input className='search' placeholder={props.placeholder} type='search' onKeyUp={props.findBank}></input>
  )
}

Search.propTypes = {
  findBank: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}
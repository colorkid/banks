import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemBank from './ItemBank';


const ListBanks = (props) => {
  const banks = props.banks.map((bank) =>
    <ItemBank renderBank={this.props.renderBank} key={bank.bik} bank={bank}/>
  );

  return (
    <>{banks}</>
  );
};

ListBanks.propTypes = {
  banks: PropTypes.array,
  renderBank: PropTypes.func
}

export default ListBanks;
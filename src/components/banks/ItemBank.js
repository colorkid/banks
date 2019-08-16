import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Bank = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
  border: 1px solid #333;
  padding: 5px;
`;

const BankValue = styled.div`
  width: 100%;
  display: flex;
`;

const ItemBank = (props) => {
  function handleClick() {
    t
    console.log(props.bank.bik);
  }

  return (
    <>
      <Bank onClick={handleClick}>
        <BankValue>Бик: {props.bank.bik}</BankValue>
        <BankValue>Корю счет: {props.bank.ks}</BankValue>
        <BankValue>Название: {props.bank.name}</BankValue>
        <BankValue>Адрес: {props.bank.address}</BankValue>
      </Bank>
    </>
  );
};

ItemBank.propTypes = {
  bank: PropTypes.object,
  renderBank: PropTypes.func
}

export default ItemBank;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'

class PopUpBank extends Component {
  constructor(props) {
    super(props);
    const bankData = this.props;
    this.state = {
      bik: bankData ? bankData.bik : '',
      ks: bankData ? bankData.ks : '',
      name: bankData ? bankData.name : '',
      address: bankData ? bankData.address : '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value  = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <PopupBank>
        <Title>{this.props.title}</Title>
        <Input name='bik' type='number' placeholder='БИК' onChange={this.handleInputChange}/>
        <Input name='ks' type='number' placeholder='Кор счет' onChange={this.handleInputChange}/>
        <Input name='name' type='text' placeholder='Название' onChange={this.handleInputChange}/>
        <Input name='address' type='text' placeholder='Адрес' onChange={this.handleInputChange}/>
        <Footer>
          <Button cancel onClick={this.props.hidePopUpBank} type='button'>Отмена</Button>
          <Button type='button' save>Сохранить</Button>
        </Footer>
      </PopupBank>
    );
  }
}

PopUpBank.propTypes = {
  title: PropTypes.string,
  hidePopUpBank: PropTypes.func
}

const Input = styled.input`
  width: 100%;
  height: 28px;
  margin-bottom: 10px;
  padding-left: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const PopupBank = styled.form`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  box-shadow: 0px 0px 2px 1px rgba(50, 50, 50, 0.75);
  border-radius: 2px;
  background-color: rgba(239, 239, 239, 0.9);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 20px;
`;

const Title = styled.div`
  margin: 0 auto 10px auto;
  font-size: 18px;
  text-transform: uppercase;
`;

const Button = styled.button`
  width: calc(50% - 10px);
  border: none;
  height: 28px;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  ${props => props.save && css`
    background-color: #db2727;
    &:hover {
      background-color: #c32525;
    }
  `}
  ${props => props.cancel && css`
    background-color: #27aedb;
    &:hover {
      background-color: #209cc5;
    }
  `}
`;
  
export default PopUpBank;
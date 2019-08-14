import React, { Component } from 'react';
import { Link } from '../fragments/Link';
import PopUpBank from './PopUpBank';
import PropTypes from 'prop-types';
import styled from 'styled-components'

class AddBankView extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowPopUpBank: false};
    this.showPopUpBank = this.showPopUpBank.bind(this);
    this.hidePopUpBank = this.hidePopUpBank.bind(this);
  }

  showPopUpBank() {
    this.setState({
      isShowPopUpBank: true
    });
  }
  
  hidePopUpBank() {
    this.setState({
      isShowPopUpBank: false
    });
  }

  render() {
    return (
      <div>
        <H1>Добавить банк</H1>
        <Container>
          <Button onClick={this.showPopUpBank}>В ручную</Button>
          <Button>По бик</Button>
        </Container>
        {this.state.isShowPopUpBank && <PopUpBank hidePopUpBank={this.hidePopUpBank} title='Введите данные'/>}
        <Link to='/'>Назад</Link>
      </div>
    );
  }
}

const Button = styled.button`
  width: calc(50% - 10px);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  margin: 10px 0;
  color: #fff;
  background-color: #db2727;
  border: none;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
    background-color: #c32525;
  }
`;

const H1 = styled.h1`
  color: #27aedb;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
  
export default AddBankView;
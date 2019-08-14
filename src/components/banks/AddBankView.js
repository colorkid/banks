import React, { Component } from 'react';
import { Link } from '../fragments/Link';
import HandleForm from './HandleForm';
import PropTypes from 'prop-types';
import styled from 'styled-components'


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
  width: 100%;
  color: #27aedb;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
class AddBankView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowHandleForm: false,
      isShowApiForm: false
    };
    this.showHandleForm = this.showHandleForm.bind(this);
    this.hideHandleForm = this.hideHandleForm.bind(this);
    this.showApiForm = this.showApiForm.bind(this);
  }

  showApiForm() {
    this.hideHandleForm();
  }

  showHandleForm() {
    this.setState({
      isShowHandleForm: true
    });
  }
  
  hideHandleForm() {
    this.setState({
      isShowHandleForm: false
    });
  }

  render() {
    return (
      <>
        <H1>Добавить банк</H1>
        <Link to='/'>Назад</Link>
        <Container>
          <Button onClick={this.showHandleForm}>В ручную</Button>
          <Button onClick={this.showApiForm}>По бик</Button>
        </Container>
        {this.state.isShowHandleForm && <HandleForm hideHandleForm={this.hideHandleForm} title='Введите данные'/>}
      </>
    );
  }
}
  
export default AddBankView;
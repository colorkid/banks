import React, { Component } from 'react';
import { Link } from '../fragments/Link';
import HandleForm from './HandleForm';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { TextTitle } from '../fragments/TextComponents';
import { Button } from '../fragments/ButtonsComponents';


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
      isShowLoadForm: false
    };
    this.showHandleForm = this.showHandleForm.bind(this);
    this.hideHandleForm = this.hideHandleForm.bind(this);
    this.showLoadForm = this.showLoadForm.bind(this);
    this.hideLoadForm = this.hideLoadForm.bind(this);
    this.clickOnHandleButton = this.clickOnHandleButton.bind(this);
    this.clickOnLoadButton = this.clickOnLoadButton.bind(this);
  }

  clickOnHandleButton() {
    this.showHandleForm();
    this.hideLoadForm();
  }

  clickOnLoadButton() {
    this.showLoadForm();
    this.hideHandleForm();
  }

  showLoadForm() {
    this.setState({
      isShowLoadForm: true
    });
  }

  hideLoadForm() {
    this.setState({
      isShowLoadForm: false
    });
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
        <TextTitle>Добавить банк</TextTitle>
        <Link to='/'>Назад</Link>
        <Container>
          <Button onClick={this.clickOnHandleButton} red>В ручную</Button>
          <Button onClick={this.clickOnLoadButton} red>По бик</Button>
        </Container>
        {this.state.isShowHandleForm && <HandleForm hideHandleForm={this.hideHandleForm} title='Введите данные'/>}
      </>
    );
  }
}
  
export default AddBankView;
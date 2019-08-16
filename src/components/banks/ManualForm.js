import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addBank } from "../../redux/actions/index";
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Button, WrapperButton } from '../fragments/ButtonsComponents';
import { WarningParagraph, SuccessParagraph } from '../fragments/TextComponents';


const InputBank = styled.input`
  width: 100%;
  height: 28px;
  margin-bottom: 10px;
  padding-left: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  border-radius: 2px;
  background-color: rgba(239, 239, 239, 0.9);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const FormTitle = styled.div`
  margin: 0 auto 10px auto;
  font-size: 18px;
  text-transform: uppercase;
`;

class ManualForm extends Component {
  constructor(props) {
    super(props);
    this.formRef = createRef();
    this.state = {
      data: {bik: '', ks: '', name: '', address: ''},
      warning: null,
      isSuccessSending: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  componentDidMount() {
    this.formRef.current.addEventListener('keyup', this.submitOnEnter.bind(this));
  }

  componentWillUnmount() {
    this.formRef.current.removeEventListener('keyup', this.submitOnEnter.bind(this));
  }

  submitOnEnter(event) {
    if (event.key === 'Enter') this.sendData();
  }

  validateFields(event) {
    let isValid = true;
    switch (event.target.name) {
      case 'bik':
        isValid = this.validateBik(event);
        break;
      case 'ks':
        isValid = this.validateKs(event);
        break;
      case 'name':
        isValid = this.validateName(event);
        break;
      case 'address':
        isValid = this.validateAddress(event);
        break;
      default:
        return false;
    }
    return isValid;
  }

  validateBik(event) {
    if (event.target.value.length >= 10) return false;
    if (!event.target.validity.valid) return false;
    return true;
  }

  validateKs(event) {
    if (event.target.value.length >= 21) return false;
    if (!event.target.validity.valid) return false;
    return true;
  }

  validateName(event) {
    if (event.target.value.length >= 81) return false;
    return true;
  }

  validateAddress(event) {
    if (event.target.value.length >= 81) return false;
    return true;
  }

  checkForNumberOfDigits() {
    return Object.keys(this.state.data).every((name) => {
      return this.state.data[name].length !== 0})
      && this.checkOnAllNumberBik(this.state.data.bik)
      && this.checkOnAllNumberKs(this.state.data.ks)
  }

  checkOnAllNumberKs(value) {
    if (value.length < 20) return false;
    return true;
  }

  checkOnAllNumberBik(value) {
    if (value.length < 9) return false;
    return true;
  }

  showWarningFillingField() {
    this.setState({warning: 'itHasEmptyFields'})
  }

  hideWarning() {
    this.setState({warning: null})
  }

  showWarningSameBik() {
    this.setState({warning: 'itHasSameBik'})
  }

  checkOnSameBik() {
    return this.props.banks.every(bank => bank.bik !== this.state.data.bik);
  }

  showSuccessParagraph() {
    this.setState({isSuccessSending: true})    
    setTimeout(() => {
      this.hideSuccessParagraph();
    }, 5000);
    
  }

  hideSuccessParagraph() {
    this.setState({isSuccessSending: false})
  }

  sendData() {
    if (!this.checkForNumberOfDigits()) {
      this.showWarningFillingField();
      return false;
    }
    if (!this.checkOnSameBik()) {
      this.showWarningSameBik();
      return false;
    }
    this.props.addBank(this.state.data);
    this.showSuccessParagraph();
  }


  handleInputChange(event) {
    if (!this.validateFields(event)) return false;
    this.hideWarning();
    const name = event.target.name;
    const value  = event.target.value;
    const data = {...this.state.data}
    data[name] = value;
    this.setState({data})
  }

  render() {
    const data = this.state.data;
    return (
      <Form ref={this.formRef}>
        <FormTitle>Введите данные</FormTitle>
        <InputBank name='bik' type='text' pattern='[0-9]*' placeholder='БИК' value={data.bik} onChange={this.handleInputChange}/>
        <InputBank name='ks' type='text' pattern='[0-9]*' placeholder='Кор счет' value={data.ks} onChange={this.handleInputChange}/>
        <InputBank name='name' type='text' placeholder='Название' value={data.name} onChange={this.handleInputChange}/>
        <InputBank name='address' type='text' placeholder='Адрес' value={data.address} onChange={this.handleInputChange}/>
        {this.state.warning === 'itHasEmptyFields' && <WarningParagraph>Не все поля заполнены корректно</WarningParagraph>
          || this.state.warning === 'itHasSameBik' && <WarningParagraph>Банк с такиже же БИК уже есть в базе</WarningParagraph>
        }
        {this.state.isSuccessSending && <SuccessParagraph>Банк успешно добавлен в базу</SuccessParagraph>}
        <WrapperButton spacebetween>
          <Button cancel onClick={this.props.showAutoForm} type='button' blue>Отмена</Button>
          <Button type='button' onClick={this.sendData} red>Сохранить</Button>
        </WrapperButton>
      </Form>
    );
  }
}

ManualForm.propTypes = {
  showAutoForm: PropTypes.func,
  addBank: PropTypes.func,
  banks: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    banks: state.banks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBank: (bank) => {
      dispatch(addBank(bank));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManualForm);

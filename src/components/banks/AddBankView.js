import React, { Component } from 'react';
import { Link } from '../fragments/Link';
import PopUpBank from './PopUpBank';
import PropTypes from 'prop-types';

class AddBankView extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowPopUpBank: false};
    this.showPopUpBank = this.showPopUpBank.bind(this);

  }

  showPopUpBank() {
    this.setState({
      isShowPopUpBank: true
    });
  }

  render() {
    return (
      <div>
        <h1>Добавить банк</h1>
        <div className='buttons-add-bank'>
          <button className='buttons-add-bank__button' onClick={this.showPopUpBank}>В ручную</button>
          <button className='buttons-add-bank__button'>По бик</button>
        </div>
        {this.state.isShowPopUpBank && <PopUpBank />}
        <Link to='/'>Назад</Link>
      </div>
    );
  }
}
  
export default AddBankView;
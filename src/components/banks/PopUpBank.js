import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PopUpBank extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='popup-bank'>
        <div class='popup-bank__title'>Введите или отредактируйте данные</div>
        <input className='popup-bank__field' type='number' placeholder='БИК' />
        <input className='popup-bank__field' type='number' placeholder='Кор счет' />
        <input className='popup-bank__field' type='text' placeholder='Название' />
        <input className='popup-bank__field' type='text' placeholder='Адрес' />
      </form>
    );
  }
}
  
export default PopUpBank;
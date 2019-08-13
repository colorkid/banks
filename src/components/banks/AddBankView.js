import React, { Component } from 'react';
import { Link } from '../fragments/Link';
import PropTypes from 'prop-types';

class AddBankView extends Component {
    render() {
      return (
        <div>
         <h1>Добавить банк</h1>
         <Link to='/'>Назад</Link>
        </div>
      );
    }
  }
  
  export default AddBankView;
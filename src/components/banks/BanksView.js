import React, { Component } from 'react';
import { Link } from '../fragments/Link';
import { Search } from '../fragments/Search';

import PropTypes from 'prop-types';

class BanksView extends Component {
  constructor(props) {
    super(props);
  }

  findBank(input) {
    console.log(input.target.value);
  }

  render() {
    return (
      <div>
        <h1>Список банков</h1>
        <Search findBank={this.findBank} placeholder='Введите БИК или название банка' />
        <Link to='/'>Назад</Link>
      </div>
    );
  }
}
  
export default BanksView;
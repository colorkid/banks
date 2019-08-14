import React, { Component } from 'react';
import { Link } from '../fragments/Link';
import { Search } from '../fragments/Search';
import styled from 'styled-components'

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
        <H1>Список банков</H1>
        <Search findBank={this.findBank} placeholder='Введите БИК или название банка' />
        <Link to='/'>Назад</Link>
      </div>
    );
  }
}

const H1 = styled.h1`
  color: #27aedb;
  text-align: center;
`;
  
export default BanksView;
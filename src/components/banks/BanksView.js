import React, { Component } from 'react';
import { Link } from '../fragments/Link';
import { SearchInput } from '../fragments/SearchInput';
import { TextTitle } from '../fragments/TextComponents';
import styled from 'styled-components';
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
      <>
        <TextTitle>Список банков</TextTitle>
        <SearchInput findCallback={this.findBank} placeholder='Введите БИК или название банка' />
        <Link to='/'>Назад</Link>
      </>
    );
  }
}
  
export default BanksView;
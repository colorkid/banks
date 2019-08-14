import React, { Component } from 'react';
import { Link } from './fragments/Link';
import { TextTitle } from './fragments/TextComponents';
import styled from 'styled-components'


class Home extends Component {
  render() {
    return (
      <>
        <TextTitle>Банки</TextTitle>
        <Link to='/banks-view'>Список банков</Link>
        <Link to='/load'>Добавить банк</Link>
      </>
    );
  }
}

export default Home;
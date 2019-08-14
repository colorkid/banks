import React, { Component } from 'react';
import { Link } from './fragments/Link';
import styled from 'styled-components'

const H1 = styled.h1`
  width: 100%;
  color: #27aedb;
  text-align: center;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <H1>Банки</H1>
        <Link to='/list'>Список банков</Link>
        <Link to='/load'>Добавить банк</Link>
      </div>
    );
  }
}

export default Home;
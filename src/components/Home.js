import React, { Component } from 'react';
import { Link } from './fragments/Link';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Банки</h1>
        <Link to='/list'>Список банков</Link>
        <Link to='/load'>Добавить банк</Link>
      </div>
    );
  }
}
  
export default Home;
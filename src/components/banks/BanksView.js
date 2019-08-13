import React, { Component } from 'react';
import { Link } from '../fragments/Link';
import { Search } from '../fragments/Search';

import PropTypes from 'prop-types';

class BanksView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Список банков</h1>
        <Link to='/'>Назад</Link>
        <Search />
      </div>
    );
  }
}
  
export default BanksView;
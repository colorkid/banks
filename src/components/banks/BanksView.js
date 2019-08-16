import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from '../fragments/Link';
import { SearchInput } from '../fragments/SearchInput';
import { TextTitle } from '../fragments/TextComponents';
import PropTypes from 'prop-types';
import ListBanks from './ListBanks';


class BanksView extends Component {
  constructor(props) {
    super(props);
    this.findBank = this.findBank.bind(this);
    this.state = {
      banks: this.props.banks
    }
  }

  findBank(event) {
    const sortedListBanks = this.props.banks.filter(bank => (bank.bik.includes(event.target.value)));
    this.setState({banks: sortedListBanks});
  }

  renderBank() {

  }

  render() {
    return (
      <>
        <TextTitle>Список банков</TextTitle>
        <Link to='/'>Назад</Link>
        <SearchInput findCallback={this.findBank} placeholder='Введите БИК или название банка' />
        <ListBanks renderBank={this.renderBank} banks={this.state.banks}/>
      </>
    );
  }
}
  
BanksView.propTypes = {
  banks: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    banks: state.banks,
  }
}

export default connect(mapStateToProps, null)(BanksView);
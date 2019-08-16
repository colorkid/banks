import React, { Component } from 'react';
import { Link } from '../fragments/Link';
import ManualForm from './ManualForm';
import { TextTitle } from '../fragments/TextComponents';
import { Button, WrapperButton } from '../fragments/ButtonsComponents';

class AddBankView extends Component {
  constructor(props) {
    super(props);
    this.state = {whatIsShowing: 'manual'};
    this.showManualForm = this.showManualForm.bind(this);
    this.showAutoForm = this.showAutoForm.bind(this);
  }

  showManualForm() {
    this.setState({
      whatIsShowing: 'manual'
    });
  }

  showAutoForm() {
    this.setState({
      whatIsShowing: 'auto'
    });
  }

  render() {
    return (
      <>
        <TextTitle>Добавить банк</TextTitle>
        <Link to='/'>Назад</Link>
        <WrapperButton>
          <Button onClick={this.showManualForm} red marginRight>В ручную</Button>
          <Button onClick={this.showAutoForm} red>По бик</Button>
        </WrapperButton>
        {this.state.whatIsShowing === 'manual' && <ManualForm showAutoForm={this.showAutoForm}/>}
      </>
    );
  }
}
  
export default AddBankView;
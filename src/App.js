import React, { Component } from 'react';
import { Route } from './components/Router';
import Home from './components/Home';
import AddBankView from './components/banks/AddBankView';
import BanksView from './components/banks/BanksView';
import styled from 'styled-components'
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={BanksView} />
        <Route path="/load" component={AddBankView} />
      </Container>
    );
  }
}

const Container= styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export default App;
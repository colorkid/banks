import React, { Component } from 'react';
import { Route } from './components/Router';
import Home from './components/Home';
import AddBankView from './components/banks/AddBankView';
import BanksView from './components/banks/BanksView';
import styled from 'styled-components'
import './App.css';

const Container= styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  margin: auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Route exact path="/" component={Home} />
        <Route path="/banks-view" component={BanksView} />
        <Route path="/load" component={AddBankView} />
      </Container>
    );
  }
}

export default App;
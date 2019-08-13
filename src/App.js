import React, { Component } from 'react';
import { Route } from './components/Router';
import Home from './components/Home';
import AddBankView from './components/banks/AddBankView';
import BanksView from './components/banks/BanksView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={BanksView} />
        <Route path="/load" component={AddBankView} />
      </div>
    );
  }
}

export default App;
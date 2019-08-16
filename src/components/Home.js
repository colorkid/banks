import React, { Component } from 'react';
import { Link } from './fragments/Link';
import { TextTitle } from './fragments/TextComponents';
import { WrapperButton } from './fragments/ButtonsComponents';

const Home = () => {
  return (
    <>
      <TextTitle>Банки</TextTitle>
      <WrapperButton>
        <Link to='/banks-view'>Список банков</Link>
        <Link to='/add-banks-view'>Добавить банк</Link>
      </WrapperButton>
    </>
  );
};

export default Home;
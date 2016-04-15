import React from 'react';
import { Router , Route, IndexRoute } from 'react-router';
import { connect } from 'react-redux';

import Main from '../components/main';
import Home from '../components/home';

const validate = (store) => {
  // 로그인이 안되어있을 경우 루트로 이동시키는 부분
  // return (location, replace) => {
  //   if( 로그인이 안되어 있을 경우 ) {
  //     replace('/');
  //   }
  // }
}


module.exports = store => (
  <Route path='/' component={Main}>
    <IndexRoute component={Home} />
  </Route>
);

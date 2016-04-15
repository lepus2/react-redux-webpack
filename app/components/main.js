import { State, Navigation, Link } from 'react-router';
import { browserHistory } from 'react-router';
import bootstrap from 'bootstrap';
import React from 'react';

import Header from './common/header';
import Footer from './common/footer';

import { connect } from 'react-redux';

require("../stylesheets/components/main.scss");

var Main = React.createClass({
  render() {
    return (
      <div id='container' >
        <Header />
        <div id='body'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
})

module.exports = connect()(Main);

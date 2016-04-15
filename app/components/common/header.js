import { State, Navigation, Link } from 'react-router';
import React from 'react';

import { connect } from 'react-redux';

require("../../stylesheets/components/common/header.scss");

import { fbLogin, fbLogout } from '../../redux/actions/fb_action';
import { fbGetPhoto } from '../../redux/actions/photo_action';

var Header = React.createClass({
  login(){
    if(this.props.loggedIn){
      this.props.dispatch(fbLogout());
    }
    else{
      this.props.dispatch(fbLogin());
    }
  },
  getPhoto(){
    this.props.dispatch(fbGetPhoto());
  },
  render() {
    return (
      <div id='header'>
        <button onClick={this.login}>FACEBOOK {this.props.loggedIn?'Logout':'Login'}</button>
        <button onClick={this.getPhoto}>Load My Photos</button>
      </div>
    );
  }
});

module.exports = connect()(Header);

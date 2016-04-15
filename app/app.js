var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');
import { browserHistory } from 'react-router';

import configureStore from './redux/configureStore';
import { Provider } from 'react-redux'; //Provider passes redux object to Router

export const store = configureStore();  //make Store for Redux

import { fbInit } from './redux/actions/fb_action';


// render ReactDOM after execute Facebook Initiation function
window.fbAsyncInit = function() {
  FB.init({
    appId      : '523268704511437', //app-id
    xfbml      : true,
    version    : 'v2.6'
  });
  store.dispatch(fbInit()); //dispatch action saying that Facebook is initiated
  init(); //render ReactDOM
};
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ko_KR/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk')
);


function init(){
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>{routes(store)}</Router>
    </Provider>,
    document.getElementById('app')
  );
}
